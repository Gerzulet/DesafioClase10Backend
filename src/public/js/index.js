const socket = io("http://localhost:8080", {forceNew: true}); 
function testFunction() {
  console.log("Test")
}
console.log("testss")
socket.on("messages", (data) => {
  console.log(data)
})
