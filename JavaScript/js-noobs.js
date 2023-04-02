
// Sample CS courses
let csCourses = [
    { courseCode: 'CS-1323', courseTitle: 'Introduction to Computer Programming for Programmers' },
    { courseCode: 'CS-1321', courseTitle: 'Java for Programmers' },
    { courseCode: 'CS-1324', courseTitle: 'Introduction to Computer Programming for NonProgrammers' },
    { courseCode: 'CS-2334', courseTitle: 'Programming Structures and Abstractions' },
    { courseCode: 'CS-2413', courseTitle: 'Data Structures' },
    { courseCode: 'CS-2813', courseTitle: 'Discrete Structures' },
    { courseCode: 'CS-2614', courseTitle: 'Computer Organization' },
    { courseCode: 'CS-3323', courseTitle: 'Principles of Programming Languages' },
    { courseCode: 'CS-3113', courseTitle: 'Introduction to Operating Systems' },
    { courseCode: 'CS-3203', courseTitle: 'Software Engineering' },
    { courseCode: 'CS-3823', courseTitle: 'Theory of Computation' },
    { courseCode: 'CS-4173', courseTitle: 'Computer Security' },
    { courseCode: 'CS-4413', courseTitle: 'Algorithm Analysis' },
    { courseCode: 'CS-4513', courseTitle: 'Database Management Systems' },
    { courseCode: 'CS-4273', courseTitle: 'Capstone Design Project' },
    { courseCode: 'CS-4473', courseTitle: 'Parallel, Distributed, and Network Programming' }
  ];
  let mathCourses = [
      { courseCode: 'MATH-1914', courseTitle: 'Different and Integral Calculus I'},
      { courseCode: 'MATH-2924', courseTitle: 'Differential and Integral Calculus II'},
      { courseCode: 'MATH-2934', courseTitle: 'Differential and Integral Calculus III'},
      { courseCode: 'MATH-4073', courseTitle: 'Numerical Analysis I'},
      { courseCode: 'MATH-4673', courseTitle: 'Graph Theory I'},
      { courseCode: 'MATH-4313', courseTitle: 'Introduction to Number Theory'},
      { courseCode: 'MATH-3333', courseTitle: 'Linear Algebra I'},
      { courseCode: 'MATH-4753', courseTitle: 'Applied Statistical Methods'},
      { courseCode: 'MATH-4743', courseTitle: 'Introduction to Mathematical Statistics'},
      { courseCode: 'ISE-3293', courseTitle: 'Applied Engineering Statistics'},
      { courseCode: 'PHYS-2514', courseTitle: 'General Physics for Engineering and Science Majors'},
      { courseCode: 'PHYS-1311', courseTitle: 'General Physics Lab I'},
      { courseCode: 'ENGR-1411', courseTitle: 'Freshman Engineering Experience'},
      { courseCode: 'ENGR-2022', courseTitle: 'Professional Development'},
    ];
    let genEdCourses = [
      { courseCode: 'ENGL-1113', courseTitle: 'Principles of English Composition'},
      { courseCode: 'ENGL-1213', courseTitle: 'Principles of English Composition'},
      { courseCode: 'PSC-1113', courseTitle: 'American Federal Government'},
      { courseCode: 'HIST-1483', courseTitle: 'United States to 1865'},
      { courseCode: 'HIST-1493', courseTitle: 'United States, 1865 to the Present'},
      { courseCode: 'UCOL-1523', courseTitle: 'Gateway to Belonging at OU'},
      { courseCode: 'UCOL-1533', courseTitle: 'Global Perspectives'},
      { courseCode: 'UCOL-1543', courseTitle: 'Ethical and Intercultural Leadership'}
    ];
  let courses = ['CS-1323','UCOL-1533','PHYS-1311','CS-4473','HIST-1483','ENGL-1113','ENGR-1411','PSC-1113', 'RUSS-2345', 'ART-5123'];
  
  let userInput1 = [];
  let userInput2 =[];
  let userInput3 =[];
  
  let totalCreditHoursGenEd = 0;
  let totalCreditHoursCs = 0;
  let totalCreditHoursMath = 0;
  let totalCreditYouHave = 0;
  
  for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      if (course.startsWith('CS-')) {
        userInput1.push(course);
      } else if (course.startsWith('MATH-') || course.startsWith('PHYS-') || course.startsWith('ENGR-') || course.startsWith('ISE-')) {
        userInput2.push(course);
      } else if (course.startsWith('ENGL-') || course.startsWith('PSC-') || course.startsWith('HIST-') || course.startsWith('UCOL-') || course.startsWith('ART-') || course.startsWith('RUSS-') || course.startsWith('MILL-')) {
          userInput3.push(course);
      }
    }
  
  // Sample user input
  
  let resultCS  = checkCoursesCS(userInput1, csCourses);
  
  
  let resultMath  = checkCoursesMath(userInput2, mathCourses);
  
  
  let resultGenEd = checkCoursesGenEd(userInput3,genEdCourses);
  
  //CS COURSE
  console.log();
  let hourNeededCS = 0;
  console.log("CS class you have completed: ");
  for(let i = 0; i < resultCS.completedCourses.length;i++){
      console.log(resultCS.completedCourses[i]);
  }
  const csHourTotal = 45;
      for (let i = 0; i < resultCS.completedCourses.length; i++) {
          const courseCode = resultCS.completedCourses[i].split(' ')[0]; // extract the course code
          const creditHours = parseInt(courseCode.substring(courseCode.length - 1)); // extract the last digit of the course code and parse it as integer
          totalCreditHoursCs += creditHours;
          hourNeededCS = csHourTotal - totalCreditHoursCs;
      }
      console.log("-----------------------------------------------------------------");
      console.log("The total credit hour you have in CS is: " + totalCreditHoursCs);
      console.log("You still need " + hourNeededCS + " credit and 9 credit approved CS electives to go! ");
      console.log("-----------------------------------------------------------------");
  
  
  console.log("CS classes that you still need to take: ");
  for(let i = 0; i < resultCS.incompleteCourses.length;i++){
      console.log(resultCS.incompleteCourses[i]);
  }
  
  //MATH COURSE
  console.log();
  let hourNeededMath = 0;
  console.log("Math class you have completed: ");
  for(let i = 0; i < resultMath.completedCourses.length;i++){
      console.log(resultMath.completedCourses[i]);
  }
  const mathHourTotal = 31;
      for (let i = 0; i < resultMath.completedCourses.length; i++) {
          const courseCode = resultMath.completedCourses[i].split(' ')[0]; // extract the course code
          const creditHours = parseInt(courseCode.substring(courseCode.length - 1)); // extract the last digit of the course code and parse it as integer
          totalCreditHoursMath += creditHours;
          hourNeededMath = mathHourTotal - totalCreditHoursMath;
      }
      console.log("------------------------------------------------");
      console.log("The total credit hour you have in CS is: " + totalCreditHoursMath);
      console.log("You still need " + hourNeededMath + " credits to go!");
      console.log("------------------------------------------------");
  
  
  console.log("Math classes that you still need to take: ");
  for(let i = 0; i < resultMath.incompleteCourses.length;i++){
      console.log(resultMath.incompleteCourses[i]);
  }
  
  //GEN ED COURSE
  let hourNeedGenEd = 0;
  console.log();
  console.log("Gen Ed class you have completed: ");
  for(let i = 0; i < resultGenEd.completedCourses.length;i++){
      console.log(resultGenEd.completedCourses[i]);
  }
  const genEdHourTotal=45;
      for (let i = 0; i < resultGenEd.completedCourses.length; i++) {
          const courseCode = resultGenEd.completedCourses[i].split(' ')[0]; // extract the course code
          if (!courseCode.includes('-')) {
              continue; // Skip courses without a course code
          }
          const creditHours = parseInt(courseCode.substring(courseCode.length - 1)); // extract the last digit of the course code and parse it as integer
          totalCreditHoursGenEd += creditHours;
          hourNeedGenEd = genEdHourTotal - totalCreditHoursGenEd;
      }
      console.log("------------------------------------------------");
      console.log("The total credit hour you have in CS is: " + totalCreditHoursGenEd);
      console.log("You still need " + hourNeedGenEd + " credits to go!");
      console.log("------------------------------------------------");
  
  
  console.log("Gen Ed classes that you still need to take: ");
  for(let i = 0; i < resultGenEd.incompleteCourses.length;i++){
      console.log(resultGenEd.incompleteCourses[i]);
  }
  totalCreditYouHave = totalCreditHoursCs + totalCreditHoursGenEd + totalCreditHoursMath;
  console.log();
  console.log("############################################################ FINAL ########################################################### ")
  console.log("The total credit you have right now is: " + totalCreditYouHave +" .The total credit hour you need for this degree is 120 hour credit.")
  
  
  
  
  // CECK CS COURSE
  function checkCoursesCS(userInput, csCourses) {
      // Initialize completed and incomplete courses arrays
      let completedCourses = [];
      let incompleteCourses = [];
      // Check if the user has taken CS-1323, CS-1321, or CS-1324
  let course1323Taken = false;
  let course1321Taken = false;
  let course1324Taken = false;
  for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === 'CS-1323') {
      course1323Taken = true;
      } else if (userInput[i] === 'CS-1321') {
      course1321Taken = true;
      } else if (userInput[i] === 'CS-1324') {
      course1324Taken = true;
      }
  }
  
  
      // Loop through the CS courses
      for (let i = 0; i < csCourses.length; i++) {
      // Check if the course code is in the user input
      let courseFound = false;
      for (let j = 0; j < userInput.length; j++) {
          if (csCourses[i].courseCode === userInput[j]) {
          // If the course code is found, add it to the completed courses list
          completedCourses.push(csCourses[i].courseCode +" "+ csCourses[i].courseTitle);
              
          courseFound = true;
          break;
          }
      }
      // If the course code is not found, add it to the incomplete courses list
      if (!courseFound) { 
          incompleteCourses.push(csCourses[i].courseCode + " " + csCourses[i].courseTitle );
      }
      }
      
      if (course1323Taken) {
          incompleteCourses = incompleteCourses.filter(course => !course.startsWith('CS-1321') && !course.startsWith('CS-1324'));
      } else if (course1321Taken) {
          incompleteCourses = incompleteCourses.filter(course => !course.startsWith('CS-1323') && !course.startsWith('CS-1324'));
      } else if (course1324Taken) {
          incompleteCourses = incompleteCourses.filter(course => !course.startsWith('CS-1321') && !course.startsWith('CS-1323'));
      } 
      
  
      // Return the results as an object
      return {
      completedCourses: completedCourses,
      incompleteCourses: incompleteCourses,
      };
  }
  
  // CHECK MATH COURSE
  function checkCoursesMath(userInput, csCourses) {
      // Initialize completed and incomplete courses arrays
      let completedCourses = [];
      let incompleteCourses = [];
  
      // Check if the user have taken MATH-4073, MATH-4673, MATH-4313 
      // MATH-4753, MATH-4743, ISE-3293
      let course4073Taken = false;
      let course4673Taken = false;
      let course4313Taken = false;
      let course4753Taken = false;
      let course4743Taken = false;
      let course3293Taken = false;
      for (let i = 0; i < userInput.length; i++) {
          if (userInput[i] === 'MATH-4073') {
              course4073Taken = true;
          } else if (userInput[i] === 'MATH-4673') {
              course4673Taken = true;
          } else if (userInput[i] === 'MATH-4313') {
              course4313Taken = true;
          } else if (userInput[i] === 'MATH-4753') {
              course4753Taken = true;
          } else if (userInput[i] === 'MATH-4743') {
              course4743Taken = true;
          } else if (userInput[i] === 'ISE-3293') {
              course3293Taken = true;
          }
      }
  
  
      // Loop through the CS courses
      for (let i = 0; i < csCourses.length; i++) {
      // Check if the course code is in the user input
      let courseFound = false;
      for (let j = 0; j < userInput.length; j++) {
          if (csCourses[i].courseCode === userInput[j]) {
          // If the course code is found, add it to the completed courses list
          completedCourses.push(csCourses[i].courseCode +" "+ csCourses[i].courseTitle);
              
          courseFound = true;
          break;
          }
      }
      // If the course code is not found, add it to the incomplete courses list
      if (!courseFound) { 
          incompleteCourses.push(csCourses[i].courseCode + " " + csCourses[i].courseTitle );
      }
      }
  
      if (course4073Taken) {
          incompleteCourses = incompleteCourses.filter(course => !course.startsWith('MATH-4673') && !course.startsWith('MATH-4313'));
      } else if (course4673Taken) {
          incompleteCourses = incompleteCourses.filter(course => !course.startsWith('MATH-4073') && !course.startsWith('MATH-4313'));
      } else if (course4313Taken) {
          incompleteCourses = incompleteCourses.filter(course => !course.startsWith('MATH-4673') && !course.startsWith('MATH-4073'));
      }
       if (course4753Taken) {
          incompleteCourses = incompleteCourses.filter(course => !course.startsWith('ISE-3293') && !course.startsWith('MATH-4743'));
      } else if (course4743Taken) {
          incompleteCourses = incompleteCourses.filter(course => !course.startsWith('MATH-4753') && !course.startsWith('ISE-3293'));
      } else if (course3293Taken) {
          incompleteCourses = incompleteCourses.filter(course => !course.startsWith('MATH-4753') && !course.startsWith('MATH-4743'));
      }
  
      if(course4073Taken == false && course4673Taken == false && course4313Taken == false){
          incompleteCourses.push("Choose one of the following course: MATH-4673 or MATH-4313 or MATH-4073");
      }
      if( course4753Taken == false && course4743Taken == false && course3293Taken == false){
          incompleteCourses.push("Choose one of the follwoing course: ISE-3293 or MATH-4753 or MATH-4743 ");
      }
      
      // Return the results as an object
      return {
      completedCourses: completedCourses,
      incompleteCourses: incompleteCourses,
      };
  }
  
  // CHECK GEN ED COURSE
  function checkCoursesGenEd(userInput, csCourses) {
      // Initialize completed and incomplete courses arrays
      let completedCourses = [];
      let incompleteCourses = [];
      // Check if the user has taken UCOL-1523, UCOL-1533, UCOL-1543
      let course1523Taken = false;
      let course1533Taken = false;
      let course1543Taken = false;
      let course1493Taken = false;
      let course1483Taken = false;
      for (let i = 0; i < userInput.length; i++) {
          if (userInput[i] === 'UCOL-1523') {
              course1523Taken = true;
          } else if (userInput[i] === 'UCOL-1533') {
              course1533Taken = true;
          } else if (userInput[i] === 'UCOL-1543') {
              course1543Taken = true;
          } else if (userInput[i] === 'HIST-1493'){
            course1493Taken = true;
          } else if(userInput[i] === 'HIST-1483'){
            course1483Taken = true;
          }
      }
  
  
      // Loop through the CS courses
      for (let i = 0; i < csCourses.length; i++) {
      // Check if the course code is in the user input
      let courseFound = false;
      for (let j = 0; j < userInput.length; j++) {
          if (csCourses[i].courseCode === userInput[j]) {
          // If the course code is found, add it to the completed courses list
          completedCourses.push(csCourses[i].courseCode +" "+ csCourses[i].courseTitle);
          courseFound = true;
          break;
          } 
      }
      // If the course code is not found, add it to the incomplete courses list
      if (!courseFound) { 
          incompleteCourses.push(csCourses[i].courseCode + " " + csCourses[i].courseTitle );
      }
      }
  
      let takenArt = false;
      let haveNotTakeArt = false;
      for(let i = 0; i < userInput.length;i++){
          if (userInput[i].startsWith('ART-') || userInput[i].startsWith('MUNM-') || userInput[i].startsWith('DRAM-')) {
              takenArt = true;
              totalCreditHoursGenEd += 3;
          }  else{
              haveNotTakeArt = true;
          }
      }
      if(takenArt){
          completedCourses.push("You are done with ART credit");
      } else if(haveNotTakeArt){
          incompleteCourses.push("You need to take an art class.");
      }
  
      let takenLangue = false;
      let haveNotTakeLangue = false;
      
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i].startsWith('RUSS-')) {
          takenLangue = true;
          totalCreditHoursGenEd += 10;
          // perform some action if needed
        } else {
          haveNotTakeLangue = true;
        }
      }
      
      if (takenLangue) {
        completedCourses.push('You have completed your language credit.');
      } else if (haveNotTakeLangue) {
        incompleteCourses.push('You need to take Language (0-10 hours in the same language). This requirement can be met by two years of the same language in high school.');
      }
      
      if (course1523Taken) {
          incompleteCourses = incompleteCourses.filter(course => !course.startsWith('UCOL-1533') && !course.startsWith('UCOL-1543'));
      } else if (course1533Taken) {
          incompleteCourses = incompleteCourses.filter(course => !course.startsWith('UCOL-1523') && !course.startsWith('UCOL-1543'));
      } else if (course1543Taken) {
          incompleteCourses = incompleteCourses.filter(course => !course.startsWith('UCOL-1523') && !course.startsWith('UCOL-1533'));
      } 
      if(course1483Taken == true){
        incompleteCourses = incompleteCourses.filter(course => !course.startsWith('HIST-1493'));
      } else if( course1493Taken == true){
        incompleteCourses = incompleteCourses.filter(course => !course.startsWith('HIST-1483'));
      }
      
  
      // Return the results as an object
      return {
      completedCourses: completedCourses,
      incompleteCourses: incompleteCourses,
      };
  }
    