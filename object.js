class Student {
    constructor(id, name, course, mobileNumber, address) {
      this.id = id;
      this.name = name;
      this.course = course;
      this.mobileNumber = mobileNumber;
      this.address = address;
    }
  }
  
  // Create an array of Student objects
  const students = [
    new Student(1, 'John Doe', 'B.Tech', '1234567890', '123 Main St, Anytown, USA'),
    new Student(2, 'Jane Doe', 'M.Tech', '9876543210', '456 Elm St, Othertown, USA'),
    new Student(3, 'Bob Smith', 'B.Sc', '5551234567', '789 Oak St, Smalltown, USA'),
    new Student(4, 'Alice Johnson', 'M.Sc', '9012345678', '321 Maple St, Largetown, USA'),
    new Student(5, 'Mike Brown', 'B.Com', '1112223333', '456 Pine St, Mediumtown, USA'),
    new Student(6, 'Emily Davis', 'B.Tech', '4445556666', '789 Cedar St, Smalltown, USA'),
    new Student(7, 'David Lee', 'M.Tech', '7778889999', '321 Walnut St, Largetown, USA'),
    new Student(8, 'Sarah Taylor', 'B.Sc', '2223334444', '456 Spruce St, Mediumtown, USA'),
    new Student(9, 'Kevin White', 'M.Sc', '9990001111', '789 Fir St, Smalltown, USA'),
    new Student(10, 'Lisa Nguyen', 'B.Tech', '3334445555', '321 Beech St, Largetown, USA'),
    new Student(11, 'Tom Harris', 'M.Tech', '6667778888', '456 Ash St, Mediumtown, USA'),
    new Student(12, 'Jessica Martin', 'B.Sc', '8889990000', '789 Birch St, Smalltown, USA'),
    new Student(13, 'Michael Davis', 'M.Sc', '1112223333', '321 Cherry St, Largetown, USA'),
    new Student(14, 'Elizabeth Taylor', 'B.Tech', '4445556666', '456 Walnut St, Mediumtown, USA'),
    new Student(15, 'William Brown', 'M.Tech', '7778889999', '789 Maple St, Smalltown, USA'),
    new Student(16, 'Jennifer Lee', 'B.Sc', '7778889999', '789 Maple St, Smalltown, USA'),
  ];
  
  // Log the students array to the console
  console.log(students);