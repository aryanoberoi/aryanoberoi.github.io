
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Home</title>
    </head>
    <body bgcolor=#FFC300>
        <h1>Are you unable to wake up in the morning?</h1>
        <h2>Welcome to the solution</h2>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/lXddFVQsTZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        If you would like to register for a support group on waking up early in the morning, fill the following 
        <form action="response.php" method="post">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname"><br>
            <label for="email">Email ID:</label><br>
            <input type="text" id="email" name="email"><br><br>
            <input type="submit" value="Submit" onclick="thankyou()">
          </form>
Welcome <?php echo $_POST["fname"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>
    </body>
    <style>
            body {
   font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
   color: azure;
   font-size: 2em;
}
h1 {
    font-size: 5em;
}
h2 {
    font-size: 3em;
}
        
    </style>
    <script>
       
        function thankyou(){
            document.getElementById("p1").innerHTML = "Paragraph changed.";
                
        }
        </script>
</html>