const pinCodes = ["1111", "5678", "1234", "9999"]
const myPin = "1234"

for (code of pinCodes){
    if (myPin === code){
        console.log("Пин код найден");
        break
    }
    else{
        console.log("Неверный пин");
        
    }
}