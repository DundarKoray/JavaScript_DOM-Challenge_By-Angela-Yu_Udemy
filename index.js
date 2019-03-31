//create a dice

  let dice1 = Math.floor( (Math.random() * 6) + 1 )
  let dice2 = Math.floor( (Math.random() * 6) + 1 )
  
  let diceImg1 = `dice${dice1}.png`
  let diceSource1 = `images/${diceImg1}`
  
  let diceImg2 = `dice${dice2}.png`
  let diceSource2 = `images/${diceImg2}`

  document.querySelector('.img1').setAttribute('src', diceSource1)
  document.querySelector('.img2').setAttribute('src', diceSource2)



  if (dice1 > dice2){
    document.querySelector('h1').textContent = 'Player 1 Won'
    console.log('Winner is player 1')
  } else if (dice1 === dice2) {
    document.querySelector('h1').textContent = 'No winner, roll it again'
    console.log('It is even');
    
  } else {
    document.querySelector('h1').textContent = 'Player 2 Won'
    console.log('Winner is player 2');
    
  }
  