document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");
    const infoText = document.getElementById("info-text");

    const infoMundiales = {

        "Mundial 1986": {
            sede: "Mexico ",
            campeon: "Argentina",
            subcampeon: "Alemania",
            goleador: "Gary Lineker (Inglaterra)",
            maxAsistente: "Íhor Belánov (URSS)",
            mejorJugador: "Maradona (Argentina)"
        },


        "Mundial 1990": {
            sede: "Italia ",
            campeon: "Alemania",
            subcampeon: "Argentina",
            goleador: "Salvatore Schillaci (Italia)",
            maxAsistente: "Jozef Chovanec (Checoslovaquia)",
            mejorJugador: "Romário (Brasil)"
        },

        "Mundial 1994": {
            sede: "USA ",
            campeon: "Brasil",
            subcampeon: "Italia",
            goleador: "Oleg Salenko (Rusia)",
            maxAsistente: "T. Hässler (Alemania)",
            mejorJugador: "Romário (Brasil)"
        },

        "Mundial 1998": {
            sede: "Francia",
            campeon: "Francia",
            subcampeon: "Brasil",
            goleador: "Davor Šuker (Croaci)",
            maxAsistente: "Ronaldo (Brasil)",
            mejorJugador: "Ronaldo (Brasil)"
        },

        "Mundial 2002": {
            sede: "Coreo del sur y Japon",
            campeon: "Brasil",
            subcampeon: "Alemania",
            goleador: "Ronaldo (Brasil)",
            maxAsistente: "Michael Ballack (Alemania)",
            mejorJugador: "Oliver Kahn (Alemania)"
        },

        "Mundial 2006": {
            sede: "Alemania",
            campeon: "Italia",
            subcampeon: "Francia",
            goleador: "Miroslav Klose (Alemania)",
            maxAsistente: "Juan Román Riquelme (Argentina)",
            mejorJugador: "Zinedine Zidane (Francia)"
        },
        "Mundial 2010": {
            sede: "Sudáfrica",
            campeon: "España",
            subcampeon: "Países Bajos",
            goleador: "Thomas Müller (Alemania)",
            maxAsistente: "Thomas Müller (Alemania)",
            mejorJugador: "Diego Forlán (Uruguay)"
        },
        "Mundial 2014": {
            sede: "Brasil",
            campeon: "Alemania",
            subcampeon: "Argentina",
            goleador: "James Rodríguez (Colombia)",
            maxAsistente: "Toni Kroos (Alemania)",
            mejorJugador: "Lionel Messi (Argentina)"
        },
        "Mundial 2018": {
            sede: "Rusia",
            campeon: "Francia",
            subcampeon: "Croacia",
            goleador: "Harry Kane (Inglaterra)",
            maxAsistente: "Toni Kroos (Alemania)",
            mejorJugador: "Luka Modrić (Croacia)"
        },
        "Mundial 2022": {
            sede: "Qatar",
            campeon: "Argentina",
            subcampeon: "Francia",
            goleador: "Kylian Mbappe (Francia)",
            maxAsistente: "Lionel Messi (Argentina)",
            mejorJugador: "Lionel Messi (Argentina)"
        }
    };

    imageContainers.forEach(container => {
        container.addEventListener("click", () => {
            const info = container.getAttribute("data-info");
            const data = infoMundiales[info];
            if (data) {
                infoText.innerHTML = `
                    <div class="mundial-info">
                        <h3>${info}</h3>
                        <p><strong>Sede:</strong> ${data.sede}</p>
                        <p><strong>Campeón:</strong> <span class="highlight">${data.campeon}</span></p>
                        <p><strong>Subcampeón:</strong> <span class="highlight">${data.subcampeon}</span></p>
                        <p><strong>Goleador:</strong> <span class="highlight">${data.goleador}</span></p>
                        <p><strong>Máximo Asistente:</strong> <span class="highlight">${data.maxAsistente}</span></p>
                        <p><strong>Mejor Jugador:</strong> <span class="highlight">${data.mejorJugador}</span></p>
                    </div>
                `;
            } else {
                infoText.textContent = "Información no disponible";
            }
        });
    });
});



