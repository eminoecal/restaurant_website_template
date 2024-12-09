<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Zieladresse
    $to = "eminoc0505@gmail.com";
    $subject = "Neue Nachricht von $name";

    // Nachricht formatieren
    $body = "Name: $name\n";
    $body .= "E-Mail: $email\n\n";
    $body .= "Nachricht:\n$message\n";

    // Header für die E-Mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // E-Mail senden
    if (mail($to, $subject, $body, $headers)) {
        echo "Nachricht erfolgreich gesendet!";
    } else {
        echo "Fehler beim Senden der Nachricht.";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>
