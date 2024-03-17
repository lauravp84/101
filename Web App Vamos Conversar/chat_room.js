// Obtendo o nome do usuário do armazenamento local
let userName = localStorage.getItem('userName');

// Atualizando o elemento HTML para exibir o nome do usuário
document.getElementById('user_name').innerHTML = "Bem-vindo " + userName + "!";

// Função addRoom()
function addRoom() {
    let roomName = document.getElementById('room_name').value; // Obtendo o nome da sala da caixa de entrada

    // Adicionando o nome da sala ao armazenamento local
    localStorage.setItem('roomName', roomName);

    // Adicionando o nome da sala ao banco de dados Firebase
    // Assumindo que 'database' é sua referência ao banco de dados Firebase
    database.ref('/').child(roomName).update({
        purpose: "Adicionando Nome da Sala"
    });

    // Redirecionando o usuário para chat_page.html
    window.location = "chat_page.html";
}

// Função getData()
function getData() {
    // Comece a programar aqui
    let rooms = ""; // Variável para armazenar os nomes das salas como uma string
    // Supondo que você esteja obtendo os nomes das salas do Firebase
    database.ref('/').on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            let childKey = childSnapshot.key;
            rooms += childKey + ", ";
        });
    });
    let roomsDiv = document.createElement('div'); // Criando uma tag div
    roomsDiv.innerHTML = rooms; // Exibindo os nomes das salas na tag div
    // Termine de programar aqui
}

// Função redirectToRoomName()
function redirectToRoomName(name) {
    // Armazenando o nome da sala no armazenamento local
    localStorage.setItem('roomName', name);

    // Redirecionando o usuário para chat_page.html
    window.location = "chat_page.html";
}