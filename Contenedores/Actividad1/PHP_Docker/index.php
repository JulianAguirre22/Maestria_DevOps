<?php
// URL de la API de REST Countries
$url = 'https://restcountries.com/v2/all';

// Realiza la solicitud GET a la API
$response = file_get_contents($url);

// Decodifica la respuesta JSON en un array asociativo
$data = json_decode($response, true);

// Muestra los nombres de los países obtenidos
foreach ($data as $country) {
    echo $country['name'] . "<br>";
}
?>
