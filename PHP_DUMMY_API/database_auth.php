<?php
header("Access-Control-Allow-Origin:  *");

function connectToDb()
    {
        global $pdo;
        if(!isset($pdo))
        {
            try {
                $pdo = new PDO("mysql:host=XXX;dbname=XXX;charset=utf8","username","password");
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            } catch (PDOException $e) {
                echo "Connection to database failed: " . $e->getMessage();
                $pdo = null;
                return;
            }
        }
    }
    
?>