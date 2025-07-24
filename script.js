const db = {
      users: [{ id: 1, name: "Ram", tickets: [] }],
      operators: [{ id: 1, name: "Sajha Yatayat", routes: ["Kathmandu - Pokhara", "Chitwan - Butwal"] }],
      agents: [{ id: 1, name: "Hari Agent", bulkTickets: [] }],
      tickets: [],
      ticketId: 101
    };

    function switchRole(role) {
      document.querySelectorAll(".role-section").forEach(sec => sec.style.display = "none");
      document.getElementById(role).style.display = "block";
      if (role === 'user') renderUser();
      if (role === 'operator') renderOperator();
      if (role === 'agent') renderAgent();
    }

    function renderUser() {
      const container = document.getElementById("userRoutes");
      container.innerHTML = "";
      db.operators.forEach(op => {
        op.routes.forEach(route => {
          container.innerHTML += `
            <div class="card">
              <b>${route}</b><br>
              <button class="btn" onclick="buyTicket(${db.users[0].id}, '${route}', 'user')">Buy Ticket</button>
            </div>`;
        });
      });
    }

    function renderOperator() {
      const container = document.getElementById("operatorRoutes");
      container.innerHTML = "";
      db.operators[0].routes.forEach(route => {
        container.innerHTML += `<div class="card"><b>${route}</b></div>`;
      });
    }

    function renderAgent() {
      const container = document.getElementById("agentRoutes");
      container.innerHTML = "";
      db.operators.forEach(op => {
        op.routes.forEach(route => {
          container.innerHTML += `
            <div class="card">
              <b>${route}</b><br>
              <button class="btn" onclick="buyBulkTickets('${route}')">Buy 5 Bulk Tickets</button>
            </div>`;
        });
      });
    }

    function addRoute() {
      const route = document.getElementById("routeInput").value;
      if (route) {
        db.operators[0].routes.push(route);
        renderOperator();
        document.getElementById("routeInput").value = "";
      }
    }

    function buyTicket(userId, route, buyerType) {
      db.tickets.push({
        id: db.ticketId++,
        route,
        buyerType,
        buyerId: userId,
        status: "booked"
      });
      alert("Ticket Booked!");
    }

    function buyBulkTickets(route) {
      for (let i = 0; i < 5; i++) {
        const ticket = {
          id: db.ticketId++,
          route,
          buyerType: 'agent',
          buyerId: db.agents[0].id,
          status: "bulk"
        };
        db.tickets.push(ticket);
        db.agents[0].bulkTickets.push(ticket.id);
      }
      alert("Bulk Tickets Purchased!");
    }

    function searchRoute() {
      const from = document.getElementById("from").value.toLowerCase();
      const to = document.getElementById("to").value.toLowerCase();
      const date = document.getElementById("date").value;
      const results = [];
      db.operators.forEach(op => {
        op.routes.forEach(route => {
          if (route.toLowerCase().includes(from) && route.toLowerCase().includes(to)) {
            results.push(route);
          }
        });
      });
      if (results.length) {
        alert("Available Routes on " + date + ":\n" + results.join("\n"));
      } else {
        alert("No routes found for your search.");
      }
    }

    switchRole('user');