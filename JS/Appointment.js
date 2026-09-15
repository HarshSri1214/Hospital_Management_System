

const form = document.getElementById("appointmentForm");
const dateInput = document.getElementById("date");

const today = new Date().toISOString().split("T")[0];

dateInput.value = today;


// सभी appointments प्राप्त करें
function getAppointments() {

    return JSON.parse(
        localStorage.getItem("hospitalAppointments") || "[]"
    );

}


// Appointment book करना
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const appointment = {

        id: Date.now(),

        name: document.getElementById("patientName").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,

        department:
            document.getElementById("department").value,

        doctor:
            document.getElementById("doctor").value,

        date:
            document.getElementById("date").value,

        time:
            document.getElementById("time").value,

        reason:
            document.getElementById("reason").value

    };


    // पुराने appointments
    const appointments = getAppointments();


    // नया appointment add
    appointments.push(appointment);


    // Save
    localStorage.setItem(
        "hospitalAppointments",
        JSON.stringify(appointments)
    );


    alert("Appointment booked successfully!");


    // Form खाली
    form.reset();


    // सभी appointments दिखाओ
    showAppointments();

});


// सभी appointments दिखाना
function showAppointments() {

    const appointments = getAppointments();

    const box =
        document.getElementById("appointmentList");


    if (appointments.length === 0) {

        box.innerHTML =
            "<p>No appointment booked yet.</p>";

        return;

    }


    box.innerHTML = "";


    appointments.forEach(function(appointment) {


        const appointmentDateTime =
            new Date(
                appointment.date +
                " " +
                convertTime(appointment.time)
            );


        const now = new Date();


        let status;


        if (now < appointmentDateTime) {

            status =
                '<span class="active">🟢 Appointment Active</span>';

        } else {

            status =
                '<span class="expired">🔴 Appointment Expired</span>';

        }


        box.innerHTML += `

            <div class="saved-appointment">

                <h3>Booked Appointment</h3>

                <p>
                    <b>Patient:</b>
                    ${appointment.name}
                </p>

                <p>
                    <b>Age:</b>
                    ${appointment.age}
                </p>

                <p>
                    <b>Gender:</b>
                    ${appointment.gender}
                </p>

                <p>
                    <b>Mobile:</b>
                    ${appointment.mobile}
                </p>

                <p>
                    <b>Department:</b>
                    ${appointment.department}
                </p>

                <p>
                    <b>Doctor:</b>
                    ${appointment.doctor}
                </p>

                <p>
                    <b>Date:</b>
                    ${appointment.date}
                </p>

                <p>
                    <b>Time:</b>
                    ${appointment.time}
                </p>

                <p>
                    <b>Reason:</b>
                    ${appointment.reason}
                </p>

                <p class="status">
                    ${status}
                </p>

                <button
                    class="delete-btn"
                    onclick="deleteAppointment(${appointment.id})">

                    Delete Appointment

                </button>

            </div>

        `;

    });

}


// Time convert करना
function convertTime(time) {

    const parts = time.split(" ");

    const range = parts[0];

    const start = range.split("-")[0];

    const hourMinute = start.split(":");

    let hour = parseInt(hourMinute[0]);

    const minute = hourMinute[1];

    const ampm = parts[1];


    if (ampm === "PM" && hour !== 12) {

        hour += 12;

    }


    if (ampm === "AM" && hour === 12) {

        hour = 0;

    }


    return hour + ":" + minute;

}


// किसी एक appointment को delete करना
function deleteAppointment(id) {

    if (
        confirm(
            "Are you sure you want to delete this appointment?"
        )
    ) {

        let appointments = getAppointments();


        appointments =
            appointments.filter(function(appointment) {

                return appointment.id !== id;

            });


        localStorage.setItem(
            "hospitalAppointments",
            JSON.stringify(appointments)
        );


        showAppointments();

    }

}


// Clear Form
function clearForm() {

    form.reset();

}


// Page load
showAppointments();


// हर 1 minute status check
setInterval(showAppointments, 60000);
