using System;
using System.Collections.Generic;
using System.Linq;
using TaskManagementAPI.Data;
using TaskManagementAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace TaskManagementAPI.Services

{
    public class TaskService
    {
        private readonly AppDbContext _context;

        public TaskService(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Returns all tasks due within the next 7 days (including today).
        /// </summary>
        public IEnumerable<AppTask> GetTasksDueNext7Days()
        {
            var today = DateTime.Today;
            var nextWeek = today.AddDays(7);

            return _context.Tasks
                .Where(t => t.DueDate >= today && t.DueDate <= nextWeek)
                .ToList();
        }

        // ✅ You can add more query methods later:
        // - GetOverdueTasks()
        // - CountTasksByPriority()
        // - etc.
        public async Task<IEnumerable<object>> GetTaskCountByPriorityAsync()
        {
            return await _context.Tasks
                .GroupBy(t => t.Priority)
                .Select(g => new
                {
                    Priority = g.Key,
                    Count = g.Count()
                })
                .ToListAsync();
        }

        public async Task<IEnumerable<AppTask>> GetTasksDueSoonAsync()
        {
            var today = DateTime.Today;
            var nextWeek = today.AddDays(7);

            return await _context.Tasks
                .Where(t => t.DueDate >= today && t.DueDate <= nextWeek)
                .ToListAsync();
        }

        public async Task<IEnumerable<AppTask>> GetOverdueTasksAsync()
        {
            var today = DateTime.Today;

            return await _context.Tasks
                .Where(t => t.DueDate < today && t.Status != "Completed")
                .ToListAsync();
        }

        public async Task<int> UpdateTaskStatusesAsync(List<int> taskIds, string newStatus)
        {
            var tasksToUpdate = await _context.Tasks
                .Where(t => taskIds.Contains(t.Id))
                .ToListAsync();

            foreach (var task in tasksToUpdate)
            {
                task.Status = newStatus;
            }

            await _context.SaveChangesAsync();
            return tasksToUpdate.Count;
        }




    }
}

