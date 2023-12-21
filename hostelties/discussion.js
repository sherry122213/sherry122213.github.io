$(document).ready(function () {
    // Dummy data for initial testing
    var dummyData = [
        { username: "User1", message: "This is a test message." },
        { username: "User2", message: "Another test message." },
        // Add more dummy data as needed
    ];

    // Function to display posted messages
    function displayMessages() {
        var messagesContainer = $("#posted-messages");
        messagesContainer.empty();

        dummyData.forEach(function (data) {
            var messageDiv = $("<div class='message mb-3'></div>");
            messageDiv.append("<strong>" + data.username + ":</strong> " + data.message);
            messagesContainer.append(messageDiv);
        });
    }

    // Display initial messages on page load
    displayMessages();

    // Function to handle form submission
    $("#discussion-form").submit(function (event) {
        event.preventDefault();

        // Get form data
        var username = $("#username").val();
        var message = $("#message").val();

        // Add the new message to dummyData
        dummyData.push({ username: username, message: message });

        // Display updated messages
        displayMessages();

        // Clear form fields
        $("#username").val("");
        $("#message").val("");
    });
});
