const dateEl = document.getElementById("date");
        const timeEl = document.getElementById("time");
        const locationEl = document.getElementById("locationInput");
        const btnEl = document.getElementById("reserveEl");
        const txt = document.getElementById("reserveTxt");
        const nameEl = document.getElementById("nameInput");
        const popup = document.getElementById("confirm");

        btnEl.addEventListener("click", function() {
            if (dateEl.value && timeEl.value && locationEl.value && nameEl.value) {
            txt.textContent = `${nameEl.value}, your table is reserved for ${timeEl.value} on ${dateEl.value} at ${locationEl.value}!`
            
            popup.style.display = "block";
            
            setTimeout(function() {
                popup.style.display = "none";
            }, 5000);

            // *This clears the input fields
            dateEl.value = '';
            timeEl.value = '';
            locationEl.value = '';
            nameEl.value = '';
        }
        })