//*  Promises və 'async / await' istifadə edərək ardıcıllıqla bir sıra
//*  asinxron əməliyyatları yerinə yetirən bir funksiyanı həyata keçirən JavaScript proqramı yazın'.

function asyncOperation(time, number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Async Əməliyyat ${number} tamamlandı`);
      resolve();
    }, time);
  });
}

async function ardıcılAsinxronƏməliyyatlar() {
  console.log("Ardıcıl asinxron əməliyyatlar başladı...");

  try {
    for (let i = 1; i <= 3; i++) {
      await asyncOperation(1000, i);
      console.log(`Əməliyyat ${i} tamamlandı`);
    }

    console.log("Bütün ardıcıl asinxron əməliyyatlar tamamlandı.");
  } catch (error) {
    console.error("Xəta baş verdi:", error);
  }
}

// Funksiyanı çağırırıq
ardıcılAsinxronƏməliyyatlar();

//*1. Çağırış edən və 2 saniyə gecikdikdən sonra onu çağıran JavaScript funksiyası yazın.

function invokeAfterDelay(callback) {
  setTimeout(callback, 2000);
}

// Mesajı consola cixardan bir funksiya
function display_message() {
  console.log("Happy new year");
}
invokeAfterDelay(display_message);

//* 2. Calback əsaslanan funksiyanı Promise əsaslı bir funksiyaya çevirən JavaScript proqramı yazın.

// Callback esasli funksiya
function callbackFunction(value, callback) {
  setTimeout(() => {
    if (value) {
      callback(null, "Success: " + value);
    } else {
      callback("Error: Value is not provided");
    }
  }, 1000);
}

// Promise esasli funksiya
function promiseFunction(value) {
  return new Promise((resolve, reject) => {
    // Callback əsaslı funksiyanı Promisə əsaslı funksiya içində çağırırıq
    callbackFunction(value, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// numune
promiseFunction("Hello")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
