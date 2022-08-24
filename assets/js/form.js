function submitData() {

   let name = document.getElementById("input-name").value
   let email = document.getElementById("input-email").value
   let phone = document.getElementById("input-phone").value
   let subject = document.getElementById("input-subject").value
   let message = document.getElementById("input-message").value

   if (name == "") {
      return alert("Baginda, saya tidak mengenali anda!")
   } else if (email == "") {
      return alert("Zaman sekarang tidak punya E-mail?")
   } else if (phone == "") {
      return alert("Bagaimana saya mau nelfon?")
   } else if (subject == "") {
      return alert("Subjeknya mohon isi ya")
   } else if (message == "") {
      return alert("Sedih... Pesannya gak diisi")
   }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

   let emailReceiver = "muhamamadabdulkholikarrasyid@gmail.com"

   let ngimel = document.createElement('a')
   ngimel.href = `mailto:${emailReceiver}?subject=${subject}&body=Hai saya ${name}, ${message}, silahkan kontak ke email ${email}, atau telfon ke ${phone}`
   ngimel.click()

   let Manusia = {
      name,
      email,
      phone,
      subject,
      message,
   }
   console.log(Manusia);
}
