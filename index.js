//create a dice

  let dice1 = Math.floor( (Math.random() * 6) + 1 )
  let dice2 = Math.floor( (Math.random() * 6) + 1 )
  
  let diceImg1 = `dice${dice1}.png`
  let diceSource1 = `images/${diceImg1}`
  
  let diceImg2 = `dice${dice2}.png`
  let diceSource2 = `images/${diceImg2}`

  document.querySelector('.img1').setAttribute('src', diceSource1)
  document.querySelector('.img2').setAttribute('src', diceSource2)
  