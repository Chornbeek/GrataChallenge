using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Data;
using TaskManagementAPI.Models;
using TaskManagementAPI.Services;


namespace TaskManagementAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly TaskService _taskService;

        public TasksController(AppDbContext context, TaskService taskService)
        {
            _context = context;
            _taskService = taskService;
        }

        // ✅ New custom query endpoint
        [HttpGet("due-soon")]
        public async Task<ActionResult<IEnumerable<AppTask>>> GetTasksDueSoon()
        {
            var tasks = await _taskService.GetTasksDueSoonAsync();
            return Ok(tasks);
        }


        // GET: /api/tasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppTask>>> GetTasks()
        {
            return await _context.Tasks.ToListAsync();
        }

        // GET: /api/tasks/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<AppTask>> GetTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null) return NotFound();
            return task;
        }

        [HttpGet("count-by-priority")]
        public async Task<ActionResult<IEnumerable<object>>> GetCountByPriority()
        {
            var result = await _taskService.GetTaskCountByPriorityAsync();
            return Ok(result);
        }
        [HttpGet("overdue")]
        public async Task<ActionResult<IEnumerable<AppTask>>> GetOverdueTasks()
        {
            var tasks = await _taskService.GetOverdueTasksAsync();
            return Ok(tasks);
        }


        // POST: /api/tasks
        [HttpPost]
        public async Task<ActionResult<AppTask>> CreateTask(AppTask task)
        {
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTask), new { id = task.Id }, task);
        }

        // PUT: /api/tasks/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(int id, AppTask updatedTask)
        {
            if (id != updatedTask.Id) return BadRequest();

            _context.Entry(updatedTask).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Tasks.Any(t => t.Id == id)) return NotFound();
                throw;
            }

            return NoContent();
        }

        // DELETE: /api/tasks/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null) return NotFound();

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        public class StatusUpdateRequest
{
    public List<int> TaskIds { get; set; } = new();
    public string NewStatus { get; set; } = string.Empty;
}

[HttpPut("update-status")]
public async Task<ActionResult> UpdateStatuses([FromBody] StatusUpdateRequest request)
{
    if (request.TaskIds == null || request.TaskIds.Count == 0)
        return BadRequest("No task IDs provided.");

    var updatedCount = await _taskService.UpdateTaskStatusesAsync(request.TaskIds, request.NewStatus);
    return Ok(new { Updated = updatedCount });
}

    }
}
