const string = "apple, banana, kiwi";

// 1. Өгсөн string - ийн бүх үсгийг том болго: 'APPLE, BANANA, KIWI'
// -- Энд кодоо бичнэ үү!

for (let i = 0; i < string.length; i++) {
  let aAscii;
  for (let j = 0; j < 32; j++) {
    if (string[i] !== string.charCodeAt(j)) {
      aAscii = string[i].charCodeAt(j) - 32;
    }
    console.log(String.fromCharCode(aAscii))
  }
}


// 2. Өгсөн string - ийг дараах хэлбэртэй болго: 'Apple; Banana; Kiwi'
// -- Энд кодоо бичнэ үү!

const array = ["d", "e", "c", "a", "b"];
// 3. Өгсөн array - ыг үсгийн дарааллаар эрэмблэ.
// -- Энд кодоо бичнэ үү!

// 4. Өгсөн array - ын голын 3н элемэнтийг салгаж аваад array1 - гэсэн хувьсагчид хийнэ.
//    array болон array1 ийг хэвлэ.
// -- Энд кодоо бичнэ үү!

// 5. Өгсөн array - ын эхний элемэнтийг устага
// -- Энд кодоо бичнэ үү!

// 6. Өгсөн array - ын сүүлийн элемэнтийг устага
// -- Энд кодоо бичнэ үү!

// 7. Өгсөн array - ын урд 'z' үсэг нэм
// -- Энд кодоо бичнэ үү!

// 8. Өгсөн array - ын ард 'j' үсэг нэм
// -- Энд кодоо бичнэ үү!

// 9. Өгсөн array - ыг JSON string болго.
// -- Энд кодоо бичнэ үү!
