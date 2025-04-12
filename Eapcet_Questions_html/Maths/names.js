function isStudentAllowed(studentName) {
    const allowedStudents = ["sravan", "shashank", "Akhilesh","spandhana","p.vaishnavi","sharanya","Hasini","akshaya","anugna","N.Vaishnavi","spoorthi","hansini","rishika","srinidhi","Teja sri","jashwanth","Harshith","Vishnu","manish","srinith","Karunya","Anshul Reddy","Nihith Reddy","rashmitha","Arhat","Asmi","Nirnaya"]; // Add more names

    return allowedStudents.some(name => name.toLowerCase() === studentName.toLowerCase());
}
