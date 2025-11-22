document.getElementById("kayitBtn").addEventListener("click", function () {
    const ad = document.getElementById("ad").value;
    const soyad = document.getElementById("soyad").value;
    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;
    const sifre = document.getElementById("sifre").value;
    const sifre2 = document.getElementById("sifre2").value;
    const genderInput = document.querySelector('input[name="gonder"]:checked');
    const cinsiyet = genderInput ? genderInput.value : null;

    if (sifre !== sifre2) {
        alert("Şifreler uyuşmuyor!");
        return;
    }

    const data = { ad, soyad, email, telefon, sifre, cinsiyet };

    const API_URL = "https://6921a03d512fb4140be0d01f.mockapi.io/uyeol"; // kendi MockAPI endpointin

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(d => {
            alert("Kayıt başarılı!");
            console.log(d);
        })
        .catch(err => console.error("Hata:", err));
});
