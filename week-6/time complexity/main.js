// exe 1
const getBalance = function (bankOperations) {
    let balance = 0 // O(1)
    for (let op of bankOperations) { //O(bankOperations.length)
      balance += op
     }
     return balance
  }
      
  getBalance([-27, -43, -2400, -700, 15000, 58]) //O(n)

 //exe 2
  const printSome = function (complaints) {
    for (let i = 1; i < complaints.length; i = i * 2)  //O(n/2) => O(log(n))
      console.log(complaints[i].text);
  }

  //exe 3
  const allSides = [
    { a: 3, b: 4 },
    { a: 15, b: 21 },
    { a: 41, b: 8 },
    { a: 12, b: 6 }
  ]
      
  const relevantSides = allSides.filter(s => s.a % 3 == 0)
  for (let sides of relevantSides) {
    console.log(getHype(sides))
  }
      
  const getHype = function (sides) {
    let a = sides.a //O(1)
    let b = sides.b //O(1)
    let sumOfSquares = a * a + b * b //O(1)
    return Math.sqrt(sumOfSquares) //O(1)
  }

  //exe 4
  const studentAnswers = {
    brBlds: {
      1: "a",
      2: "a",
      3: "c"
    },
    dvOna: {
      1: "a",
      2: "c",
      3: "c"
    },
    nmPrz: {
      1: "a",
      2: "b",
      3: "a"
    }
  }
  const studentGithubs = ["brBlds", "dvOna", "nmPrz"]
      
  const distributions = {
    1: {},
    2: {},
    3: {}
  }
      
  const getDistributions = function (studentAnswers) {
    studentGithubs.forEach(sg => { //O(n)
      let answers = studentAnswers[sg]
      
      Object.keys(answers).forEach(questionNumber => { //O(m)
        let letterAnswer = answers[questionNumber]
      
        distributions[questionNumber][letterAnswer] ?
          distributions[questionNumber][letterAnswer]++ :
          distributions[questionNumber][letterAnswer] = 1
      })
    })
      
    return distributions
  }
      
  getDistributions(studentAnswers)

  //exe 5 
  const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email))
    
  const emailManager = function () {
  let email = generateEmail()
    
  $.get('/recepients', function (recepients) {
      sendEmails(email, recepients) //O(n)
  })
}

//exe 6

function findDuplicates(arr){
    const set = new Set(arr)
    console.log(set)
    const obj = {
    
    }
    for(let i of set){
        obj[i]= 0
    }
    
    for(let i of arr){
        if(set.has(i))
        {
            obj[i] ++
        }
    }
    console.log(obj)
}
const arr = [1,1,2,3,4,4]
findDuplicates(arr)

    
