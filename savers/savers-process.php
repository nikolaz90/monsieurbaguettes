<?php
    if (isset($_POST["submit"])){
                include 'savers-style.php';
                $target = $_POST["target-number"];
                $monthly = $_POST["monthly-number"];
                $interest = $_POST["interest-number"]; 
                $yearlyInput = $monthly*12;
                $decimalisedInterestRate = $interest/100;

                $counter = 0;
                $counter2 = 0;
                $accumulatedSavings = 0;
                $accumulatedSavings2 = 0;
                $yearlyInput2 = ($_POST["monthly-number"]+ 100)*12; 

                    
                    if($target > $monthly && $monthly > 0 && $interest >= 0){
                        while ($accumulatedSavings<$target){
                            $accumulatedSavings = $accumulatedSavings+$yearlyInput;
                            $accumulatedSavings = $accumulatedSavings*(1+$decimalisedInterestRate);
                            $counter++; 
                        }
                        while ($accumulatedSavings2<$target){
                            $accumulatedSavings2 = $accumulatedSavings2+$yearlyInput2;
                            $accumulatedSavings2 = $accumulatedSavings2*(1+$decimalisedInterestRate);
                            $counter2++; 
                        }
                        echo "If you save $". $monthly . " every month, it will take at least " .$counter. " years to save $" . $target . " and it would take you " .$counter2 . " years if you save an extra $100 every month.";
                    } else {
                        echo "Please check your numbers";
                    }
            }
?>