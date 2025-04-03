
# Build stage
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

COPY *.sln .
COPY TaskManagementAPI/*.csproj TaskManagementAPI/
RUN dotnet restore

COPY TaskManagementAPI/. TaskManagementAPI/
WORKDIR /app/TaskManagementAPI
RUN dotnet publish -c Release -o out

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app/TaskManagementAPI/out ./
ENTRYPOINT ["dotnet", "TaskManagementAPI.dll"]
