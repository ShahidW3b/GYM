document.addEventListener("DOMContentLoaded", () => {
    // Simulated dynamic data
    document.getElementById("membersCount").textContent = 128;
    document.getElementById("bookingsCount").textContent = 342;
    document.getElementById("progressCount").textContent = 76;
    document.getElementById("trainerSessions").textContent = 58;
  
    const activityLog = [
      "Ali submitted progress report for client #214",
      "Reza held a bodybuilding session at 4PM",
      "Sara created a new fat loss plan",
      "New member 'Hamed' registered",
      "3 users booked a session for Friday"
    ];
  
    const logList = document.getElementById("activityLog");
    activityLog.forEach(log => {
      const li = document.createElement("li");
      li.textContent = log;
      logList.appendChild(li);
    });
  });