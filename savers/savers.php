<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="savers.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Gluten:wght@100&display=swap" rel="stylesheet">

   <title>Savers</title> 
</head>

<header></header>

<body>

    <div class="section" id="section-1">
        <h1 class="title-class">Savings simulator</h1>
        <p class="intro-font">This is a simulator designed to give you a rough idea of how much time you will need to save up to reach a target. 
            I have recently been doing these kinds of calculations as I am currently saving up to buy a property as a first time buyer. 
            It's written in php although next time I will stick to javaScript.
            This was a cool way for me to set up a local server and get to grips with a simple php script.
        </p>
        <div class="flex-box input-box" id="input-box">
            <br>
            <form class="input-form" id="input-form" action="savers.php" method="POST">
                <label class="label" id="target-amount">How much do you plan on saving? : </label>
                <br>
                <input class="input-num" type="number" name="target-number" id="end-target" placeholder="50000" min="1" max="9000000">
                <br>
                <label class="label" id="monthly-target">How much do you plan on saving a month? : </label>
                <br>
                <input class="input-num" type="number" name="monthly-number" id="monthly-saving" placeholder="5000" min="1" max="9000000">
                <br>
                <label class="label" id="interest-rate">What savings interest rate (%) can you get? : </label>
                <br>
                <input class="input-num" type="number" name="interest-number" id="interest" placeholder="5" value="0" max="100">
                <br>
                <button class="simulate-btn" type="submit" name="submit" id="simulate-btn-id">Simulate</button>
            </form>
        </div>
        <div class="flex-box answer-box" id="answer-box">
            
            <?php           
                require_once 'savers-process.php'
            ?>

        </div>
    </div>
</body>

<footer></footer>

</html>




