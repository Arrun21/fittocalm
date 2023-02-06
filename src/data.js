const exercise = [
    {
      id: 1,
      title: 'sit up',
      category: 'bodyweight',
      experience: 'beginner',
      img: './images/situp.jpg',
      vid: 'https://www.youtube.com/embed/jDwoBqPH0jk',
      desc: `1. First lie down on your back. Place your hands behind your hand.\n2. Lift up your upper body till your head is facing your knees. Should feel some tension on your core.\n3. From here you should bring your back all the back till you reach the floor.\n4. Keep doing this exercise as long as possible (best to do for 12 times). `,
    },
    {
      id: 2,
      title: 'lying floor leg raise',
      category: 'bodyweight',
      experience: 'beginner',
      img: './images/lyingleg2.jpg',
      vid: 'https://www.youtube.com/embed/l4kQd9eWclE',
      desc: `1.First lie down on you back. \n2. Raise your legs up until your legs are at a 90 degree angle. \n3. From here lower your legs but don't touch the ground.\n4. Do this exercise for a number of times (approximately 12 reps).`,
    },
    {
      id: 3,
      title: 'pushup',
      category: 'bodyweight',
      experience: 'beginner',
      img: './images/pushup.jpg',
      vid: 'https://www.youtube.com/embed/JyCG_5l3XLk',
      desc: `1. First lie down on the floor, take upon a plank position instead of having your elbows out, have your arms fully stretched out.\n2. From here lower your body down till your chest touches the floor. Your elbows would be beside you at this moment.\n3. Then push your arms out again fully stretched out.\n4. Repeat this exercise for as long as possible,keep going you got this!!!`,
    },
    {
      id: 4,
      title: 'bicycle',
      category: 'bodyweight',
      experience: 'beginner',
      img: './images/bicycle2.jpg',
      vid: 'https://www.youtube.com/embed/1we3bh9uhqY',
      desc: `1. First lie down on your back. With your legs stretched out.\n2. From here bring one knee up till it reaches your belly button, then bring your elbow that is opposite the knee and touch the knee.\n3. After this do it for the other knee and elbow.\n4. Keep doing this for a number of times maybe 12 reps, you got this!!!`,
    },
    {
      id: 5,
      title: 'dumbbell bench press',
      category: 'chest',
      experience: 'beginner',
      img: './images/dumbbellbenchpress3.jpeg',
      vid: 'https://www.youtube.com/embed/VmB1G1K7v94',
      desc: `1. First pick out a set of dumbbells that you can lift.\n2. From here find a flat bench and lie down.\n3. Now you should push out the dumbbells till your elbows are nearly fully stretched.\n4. Then bring arms back down till the dumbbells reach your chest level.\n5. Keep doing this for approximately 12 times. One more push keep going!!!`,
    },
    {
      id: 6,
      title: 'seated cable row',
      category: 'back',
      experience: 'beginner',
      img: './images/seatedcablerow.jpg',
      vid: 'https://www.youtube.com/embed/GZbfZ033f74',
      desc: `1. First check if the cable row has a close grip attached if not, clip on the close grip.\n2. From here reach for the close grip and then bring it back till it reaches your stomach area.\n3. Make sure your back is straight.\n4. Then slowly release till your arms are nearly stretched out.\n5. Then bring it back to stomach area.\n6. Best to do this for 12 reps or as many as you can do. Keep going!!!`,
    },
    {
      id: 7,
      title: 'incline dumbbell curl',
      category: 'biceps',
      experience: 'beginner',
      img: './images/inclinedumbell.jpg',
      vid: 'https://www.youtube.com/embed/07Bcqtib4FM',
      desc: `1. Pick up a pair of dumbbells make sure its not too heavy for you.\n2. From here find an incline bench or adjust a bench till its in the incline position.\n3. Then push the dumbbells forwards away from you, till your arms are stretched out.\n4. Then bring the dumbbells back down, keep doing this for 12 reps or more. Keep going, you got this!!!`,
    },
    {
      id: 8,
      title: 'rope tricep extension',
      category: 'tricep',
      experience: 'beginner',
      img: './images/ropetricep.jpg',
      vid: 'https://www.youtube.com/embed/vB5OHsJ3EME',
      desc: `1. First make sure the cable machine has the rope attached, if not find the rope attachment and clip it on. Make sure it is raised to the maximum height.\n2. From here bring the rope down. With arms stretched out.\n3. Then bring the rope back up.\n4. Best to do this for 12 reps, you got this keep going!!!`,
    },
    {
      id: 9,
      title: 'seated leg curl',
      category: 'legs',
      experience: 'beginner',
      img: './images/seatedlegcurl.jpg',
      vid: 'https://www.youtube.com/embed/4ZDm5EbiFI8',
      desc: `1. First select the weight you would like and sit down on the machine.\n2. Place your legs against the padding.\n3. Lift your leg up till stretched out. And then bring it back down.\n4. Keep doing this for 12 reps, you got this!!! `,
    },
    {
      id: 10,
      title: 'barbell bench press',
      category: 'chest',
      experience: 'intermediate',
      img: './images/barbellbenchpress.jpg',
      vid: 'https://www.youtube.com/embed/4aVy2Xj6wYs',
      desc: `1. First place how many plates you wish on your barbell. Then lie down.\n2. From here you should reach for the barbell.\n3. Bring the barbell down till it nearly reaches your chest.\n4. Then bring the barbell back up.\n5. Keep doing this for 12 reps or less. You got this,keep going!!!`,
    },
    {
      id: 11,
      title: 'incline bench press',
      category: 'chest',
      experience: 'beginner',
      img: './images/inclinebench.jpg',
      vid: 'https://www.youtube.com/embed/dtNXLavPFo0',
      desc: `1. First adjust the bench into an incline position.\n2. Then choose your weight plates and place it on the bar. And lie down on the bench.\n3. Lift the bar off the rack.\n4. Bring the bar down to your chest.\n5. Then bring the bar back up.\n6. Make sure that your elbows are slightly bent.\n7. Best to do this for 12 reps or less.\n8. One more push, you got this!!! `,
    },
    {
      id: 12,
      title: 'chest fly',
      category: 'chest',
      experience: 'beginner',
      img: './images/chestfly.jpg',
      vid: 'https://www.youtube.com/embed/Z57CtFmRMxA',
      desc: `1. First choose your weight on the chest fly machine.\n2. If the seat is not comfortable, adjust the height.\n3. From here grab the handle bars and then bring it towards your chest.\n4. Then bring it away from your chest.\n5. Keep doing this exercise for approximately 12 reps.\n6. Keep going!!!`,
    },
    {
      id: 13,
      title: 'chest dip',
      category: 'chest',
      experience: 'intermediate',
      img: './images/chestdip.jpg',
      vid: 'https://www.youtube.com/embed/dX_nSOOJIsE',
      desc: `1. First place your hands on the grips.\n2. Push your body upwards, with arms extended.\n3. Bring your body back down with elbows bent.\n4. Do this exercise for 12 reps or as many as you can. Keep pushing, you got this!!!`,
    },
    {
      id: 14,
      title: 'standing dumbbell curl',
      category: 'biceps',
      experience: 'beginner',
      img: './images/standingdumbbell.jpg',
      vid: 'https://www.youtube.com/embed/ykJmrZ5v0Oo',
      desc: `1. First pick out a set of dumbbells.\n2. From here pick up the dumbbells and stand upright.\n3. At the same time bring both arms up, until dumbbells reach shoulder height.\n4. Make sure you are moving your elbows not moving the whole arm up.\n5. Then bring the dumbbells back down.\n6. Best to do for 12 reps or as many as you can. Keep going, you can do it!!!`,
    },
    {
      id: 15,
      title: 'standing barbell curl',
      category: 'biceps',
      experience: 'beginner',
      img: './images/standingbar.jpg',
      vid: 'https://www.youtube.com/embed/kwG2ipFRgfo',
      desc: `1. First pick out a barbell.\n2. From here pick up the barbell and stand upright.\n3. Bring up the barbell until it reaches shoulder height.\n4. Make sure you are moving your elbows not moving the whole arm up.\n5. Then bring the barbell back down.\n6. Best to do for 12 reps or as many as you can. Keep going, you can do it!!!`,
    },
    {
      id: 16,
      title: 'bent over row',
      category: 'back',
      experience: 'beginner',
      img: './images/bentoverrow.jpg',
      vid: 'https://www.youtube.com/embed/FWJR5Ve8bnQ',
      desc: `1. First place your desired weights on the barbell. Lift it off the rack.\n2. Bend over slightly and lift up the barbell to your belly button.\n3. From here bring the barbell back down.\n4. Do this for 12 reps or as many as possible, keep going, you can do this!!!`,
    },
    {
      id: 17,
      title: 'dumbbell row',
      category: 'back',
      experience: 'beginner',
      img: './images/dumbbellrow.jpg',
      vid: 'https://www.youtube.com/embed/-koP10y1qZI',
      desc: `1. First choose a set of dumbbells.\n2. Then go to a flat bench,place your left knee and left hand on the bench.\n3. With your right hand bring up the dumbbell towards your ribs area.\n4. Then bring the dumbbell back down.\n5. Best to do for 12 reps or as many as you can for both arms, keep going, you got this!!!`,
    },
    {
      id: 18,
      title: 'lat pulldown',
      category: 'back',
      experience: 'beginner',
      img: './images/latpulldown.jpg',
      vid: 'https://www.youtube.com/embed/u3gQT2aMVaI',
      desc: `1. First make sure the wide grip is attached onto the machine, if not clip the wide grip on.\n2. From here reach up and pull the grip down to your upper chest.\n3. Then bring the grip back up.\n4. Best to do for 12 reps or as many as you can, you got this, keep going!!! `,
    },
    {
      id: 19,
      title: 'concentration curl',
      category: 'biceps',
      experience: 'beginner',
      img: './images/concentrationcurl.jpg',
      vid: 'https://www.youtube.com/embed/0AUGkch3tzc',
      desc: `1. First pick a set of dumbbells, and bring them back to the bench.\n2. From here,sit on the bench.\n3. Place your left arm against your left knee and bring up the dumbbell.\n4. Bring the dumbbell down, do this for the right arm as well.\n5. Do this for 12 reps or as many as you can, you can do this!!!`,
    },
    {
      id: 20,
      title: 'straight bar tricep extension',
      category: 'tricep',
      experience: 'beginner',
      img: './images/straightbar.jpeg',
      vid: 'https://www.youtube.com/embed/LlBqt8dksdk',
      desc: `1. First make sure the cable machine has the straight bar attached, if not find the straight bar attachment and clip it on. Make sure it is raised to the maximum height.\n2. From here bring the bar down.\n3. Then bring the bar back up.\n4. Best to do this for 12 reps, you got this keep going!!!`,
    },
    {
      id: 21,
      title: 'two arm standing dumbbell extension',
      category: 'tricep',
      experience: 'beginner',
      img: './images/standingdumbbelltricep2.jpg',
      vid: 'https://www.youtube.com/embed/-Vyt2QdsR7E',
      desc: `1. First pick out a dumbbell.\n2. Now bring the dumbbell behind your head with both hands and bring it up,till its above your head.\n3. From here bring it down, till your elbows are bent.\n4. Best to do for 12 reps or as many as you can, keep going you can do it!!!`,
    },
    {
      id: 22,
      title: 'one arm standing dumbbell extension',
      category: 'tricep',
      experience: 'beginner',
      img: './images/onearm.jpeg',
      vid: 'https://www.youtube.com/embed/_gsUck-7M74',
      desc: `1. First pick out a dumbbell.\n2. Now bring the dumbbell behind your head with one hand and bring it up,till its above your head.\n3. From here bring it down, till your elbows are bent.\n4. Best to do for 12 reps or as many as you can for both arms, keep going you can do it!!!`,
    },
    {
      id: 23,
      title: 'leg press',
      category: 'legs',
      experience: 'beginner',
      img: './images/legpress.jpg',
      vid: 'https://www.youtube.com/embed/VFk3RzndUEc',
      desc: `1. First place weights on the machine, and sit down.\n2. Place your feet against the machine with knees slightly bent.\n3. Now push the machine with your legs, do not fully straighten your legs.\n4. From here bring the machine back down.\n5. Do this exercise for 12 reps or as many as you can. Keep going, one more push!!!`,
    },
    {
      id: 24,
      title: 'seated calf raise',
      category: 'legs',
      experience: 'beginner',
      img: './images/seatedcalfraise.jpg',
      vid: 'https://www.youtube.com/embed/JbyjNymZOt0',
      desc: `1. First choose a weight and sit down.\n2. Place your feet on the machine.\n3. Lift your feet up using the ball of your feet.\n4. From here bring it back down.\n5. Do this exercise for 12 reps or as long as you can, keep going you can do this!!!`,
    },
    {
      id: 25,
      title: 'barbell squat',
      category: 'legs',
      experience: 'intermediate',
      img: './images/barbellsquat.jpg',
      vid: 'https://www.youtube.com/embed/MVMNk0HiTMg',
      desc: `1. First place weights that you would like on the barbell.\n2. From here go under the barbell, placing it on your upper back and lift it off the rack.\n3. Take a step back.\n4. From here bend your knees down, just like doing a traditional squat.\n5. Then stand back up.\n6. Best to do for 12 reps or as many as you can, one more you can do it!!!`,
    },
    {
      id: 26,
      title: 'cable cross over',
      category: 'chest',
      experience: 'beginner',
      img: './images/cablecrossover.jpg',
      vid: 'https://www.youtube.com/embed/taI4XduLpTk',
      desc: `1. First choose your weights and then grab the two handles on the cable machine.\n2. With one leg back and one leg forward. Bring your arms forwards so they are infront of chest.\n3. From here bring your arms back out.\n4. Do this for 12 reps or as many as you can, keep going!!!`,
    },
    {
      id: 27,
      title: 'dumbbell flys',
      category: 'chest',
      experience: 'beginner',
      img: './images/dumbbellfly.jpg',
      vid: 'https://www.youtube.com/embed/eozdVDA78K0',
      desc: `1. First select a pair of dumbbells, lie down on a flat bench.\n2. Bring the dumbbells up, arms extended out infront of you.\n3. From here bring the dumbbells away from your body.\n4. Best to do for 12 reps or more, you can do this!!!`,
    },
    {
      id: 28,
      title: 'dumbbell pullover',
      category: 'chest',
      experience: 'intermediate',
      img: './images/dumbbellpullover.jpg',
      vid: 'https://www.youtube.com/embed/zUVzVXMh9Nc',
      desc: `1. First pick out a dumbbell, with both hands hold onto the dumbbell.\n2. Lie your back against the bench.\n3. From here bring the dumbbell back behind your head.\n4. Then bring it back up, arms extended out.\n5. Do this for 12 reps or as many as you can do. Keep going!!!`,
    },
    {
      id: 29,
      title: 'incline dumbbell bench press',
      category: 'chest',
      experience: 'beginner',
      img: './images/inclinedumbellbenchpress.jpg',
      vid: 'https://www.youtube.com/embed/07Bcqtib4FM',
      desc: `1. First pick out your dumbbells, and find an incline bench or adjust a bench to incline position.\n2. Lie down on the bench.\n3. Bring the dumbbells up with your arms stretched out.\n4. Bring the dumbbells back down to chest height.\n5. Best to do for 12 reps or as many as you can. You got this, one more push!!!`,
    },
    {
      id: 30,
      title: 'hammer strength machine incline bench press',
      category: 'chest',
      experience: 'beginner',
      img: './images/hammerstrength.jpg',
      vid: 'https://www.youtube.com/embed/ig0NyNlSce4',
      desc: `1. First place your chosen your weights onto the machine, and sit down.\n2. Grab the handles, and push your arms straight up.\n3. Bring the handles back down near chest.\n4. Do this for 12 reps or as many as you can do. One more push!!!`,
    },
    {
      id: 31,
      title: 'pull up',
      category: 'bodyweight',
      experience: 'beginner',
      img: './images/pullup.jpg',
      vid: 'https://www.youtube.com/embed/UgKaDSA3uIg',
      desc: `1. First find a pull up bar and place your hands so that they are slightly apart.\n2. From here pull your body up till your chin is above the bar.\n3. Then bring your body back down.\n4. Do this for 12 reps or as many as you can. Keep going, one more!!! `,
    },
    {
      id: 32,
      title: 'wide grip pull up',
      category: 'bodyweight',
      experience: 'beginner',
      img: './images/widegrippullup.jpeg',
      vid: 'https://www.youtube.com/embed/iywjqUo5nmU',
      desc: `1. First find a pull up bar and place your hands so that they are wide apart.\n2. From here pull your body up till your chin is above the bar.\n3. Then bring your body back down.\n4. Do this for 12 reps or as many as you can. Keep going, one more!!! `,
    },
    {
      id: 33,
      title: 'chin up',
      category: 'bodyweight',
      experience: 'beginner',
      img: './images/chinup.jpg',
      vid: 'https://www.youtube.com/embed/_71FpEaq-fQ',
      desc: `1. First find a pull up bar, with your palms facing away from you. Place your hands on the bar so that they are slightly apart.\n2. From here pull your body up till your chin is above the bar.\n3. Then bring your body back down.\n4. Do this for 12 reps or as many as you can. Keep going, one more!!! `,
    },
    {
      id: 34,
      title: 'side crunch',
      category: 'bodyweight',
      experience: 'beginner',
      img: './images/sidecrunch.jpg',
      vid: 'https://www.youtube.com/embed/w0OWFjfI3zM',
      desc: `1. First lie on your side, place both of your legs ontop of each other with legs being bent.\n2. Now with one arm place it behind head, and then bring your shoulder up.\n3. From here bring your shoulder back down.\n4. Best to do for 12 reps or more, keep going!!!`,
    },
    {
      id: 35,
      title: 'hanging leg raise',
      category: 'bodyweight',
      experience: 'advanced',
      img: './images/hanginglegraise.jpg',
      vid: 'https://www.youtube.com/embed/Pr1ieGZ5atk',
      desc: `1. First hang on a bar, then raise your legs up as high as you can.\n2. From here bring your legs back down.\n3. Do this for as long as you can, keep going!!!`,
    },
    {
      id: 36,
      title: 'side plank',
      category: 'bodyweight',
      experience: 'beginner',
      img: './images/sideplank.jpg',
      vid: 'https://www.youtube.com/embed/NXr4Fw8q60o',
      desc: `1. First lie on your side, then using your elbow to raise your body up.\n2. Make sure your legs are straight.\n3. From here hold onto this position for 30 seconds to 1 minute.\n4. Make sure you do this exercise on your other side as well.\n5. Keep going, hold for a little longer!!!`,
    },
    {
      id: 37,
      title: 'bent over dumbbell row',
      category: 'back',
      experience: 'beginner',
      img: './images/bentoverdumbbell.jpg',
      vid: 'https://www.youtube.com/embed/6TSP1TRMUzs',
      desc: `1. First pick out a pair of dumbbells, with your back slightly bent over.\n2. Bring the dumbbells up to ribcage area.\n3. Bring the dumbbells back down.\n4. Do this exercise for 12 reps or as many as you can. You can do it!!!`,
    },
    {
      id: 38,
      title: 't-bar row',
      category: 'back',
      experience: 'beginner',
      img: './images/tbar.jpg',
      vid: 'https://www.youtube.com/embed/j3Igk5nyZE4',
      desc: `1. First place your chosen weights onto the bar.\n2. Reach down and grab onto the handle.\n3. Bring the bar up to your chest.\n4. Then bring the bar back down.\n5. Keep doing this for 12 reps or as many as you can, keep going!!!`,
    },
    {
      id: 39,
      title: 'behind neck lat pulldown',
      category: 'back',
      experience: 'intermediate',
      img: './images/behindneck.jpg',
      vid: 'https://www.youtube.com/embed/qayYjoMZQrw',
      desc: `1. First make sure the wide grip is on the machine, if not clip the wide grip on.\n2. Similar to the lat pulldown, pull down the wide grip but then bring it behind your head until it reaches your lower neck.\n3. Then bring it back up.\n4. Best to do this for 12 reps or as many as you can. One more, you can do it!!!`,
    },
    {
      id: 40,
      title: 'superman',
      category: 'back',
      experience: 'beginner',
      img: './images/superman.jpg',
      vid: 'https://www.youtube.com/embed/cc6UVRS7PW4',
      desc: `1. Lie down on your stomach. With arms and legs stretched out.\n2. Lift the right arm and left leg up at the same time and hold. Do this for the opposite arm and leg as well.\n3. Keep doing this exercise for 12 reps, you can do it!!!`,
    },
    {
      id: 41,
      title: 'supported chest dumbbell row',
      category: 'back',
      experience: 'beginner',
      img: './images/supportedchest.jpg',
      vid: 'https://www.youtube.com/embed/fV78qqekQU4',
      desc: `1. First pick out a pair of dumbbells, find an incline bench or adjust a bench into a incline position. Lie down with your front against the bench.\n2. Bring up the dumbbells up to rib cage area.\n3. Then bring the dumbbells back down.\n4. Do this exercise for 12 reps or as many as you can. One more!!!`,
    },
    {
      id: 42,
      title: 'machine row',
      category: 'back',
      experience: 'beginner',
      img: './images/machinerow.jpg',
      vid: 'https://www.youtube.com/embed/TeFo51Q_Nsc',
      desc: `1. First select a weight on the machine.\n2. Place your chest against the padding.\n3. Reach for the handles and pull them towards you.\n4. Then bring them back.\n5. Do this for 12 reps or as many as you can. You can do this!!!`,
    },
    {
      id: 43,
      title: 'hammer curl',
      category: 'biceps',
      experience: 'beginner',
      img: './images/standinghammer.jpg',
      vid: 'https://www.youtube.com/embed/TwD-YGVP4Bk',
      desc: `1. First select your pair of dumbbells.\n2. Then bring up one dumbbell at a time.\n3. Bring it up to chest area.\n4. Then bring the dumbbell back down.\n5. Do the exact same with your other arm.\n6. Keep doing this exercise for 12 reps or as many as you can, you can do it!!!`,
    },
    {
      id: 44,
      title: 'EZ Bar Preacher Curl',
      category: 'biceps',
      experience: 'beginner',
      img: './images/ezbar.jpg',
      vid: 'https://www.youtube.com/embed/Gydpcouclx8',
      desc: `1. First place your chosen weight plates onto the ez bar.\n2. Grip onto the bar and bring it up to your shoulders.\n3. Then bring the bar back down.\n4. Do this exercise for 12 reps or as many as you can, you can do it!!!`,
    },
    {
      id: 45,
      title: 'reverse curl',
      category: 'biceps',
      experience: 'beginner',
      img: './images/reversecurl.jpeg',
      vid: 'https://www.youtube.com/embed/nRgxYX2Ve9w',
      desc: `1. First pick up a barbell or a ez bar.\n2. With your hands facing down, grip the bar.\n3. Bring the barbell up till it reaches chest area.\n4. Bring the barbell back down.\n5. Keep doing this for 12 reps or as many as possible, you can do it!!!`,
    },
    {
      id: 46,
      title: 'dumbbell preacher curl',
      category: 'biceps',
      experience: 'beginner',
      img: './images/dumbbellpreacher.jpg',
      vid: 'https://www.youtube.com/embed/DoCWeUBA0Gs',
      desc: `1. Choose your desired weight and then place arm against the top of bench.\n2. Maintain this position with your palms facing up.\n3. Inhale and slowly bring the dumbbell down away from your shoulder.\n4. Once the bicep is fully extended, curl the dumbbell back up.\n5. Repeat this exercise on both sides for a number of times.`,
    },
    {
      id: 47,
      title: 'dumbbell hammer preacher curl',
      category: 'biceps',
      experience: 'beginner',
      img: './images/hammerpreacher.jpg',
      vid: 'https://www.youtube.com/embed/32W1sB5DkHY',
      desc: `1. Choose your desired weight and placing chest against preacher bench.\n2. Maintain this position with your palms facing up.\n3. Inhale and slowly bring the dumbbell down away from your shoulder.\n4. Once the bicep is fully extended, curl the dumbbell back up.\n5. Repeat this exercise for a number of times.`,
    },
    {
      id: 48,
      title: 'barbell drag curl',
      category: 'biceps',
      experience: 'beginner',
      img: './images/barbelldragcurl.jpg',
      vid: 'https://www.youtube.com/embed/LMdNTHH6G8I',
      desc: `1. Choose a weight and load it onto a bar and placing hands shoulder width apart.\n2. With your palms facing up, inhale and curl the barbell towards your shoulders.\n3. When you are pulling the bar upwards, ensure to keep it close to your upper body with elbows slighlty behind your body.\n4. Once the biceps are fully contracted, control the tension and slowly lower the bar back down.\n5. Repeat this for a number of times.`,
    },
    {
      id: 49,
      title: 'EZ Bar Skullcrusher',
      category: 'tricep',
      experience: 'beginner',
      img: './images/ezbarskullcrusher.jpg',
      vid: 'https://www.youtube.com/embed/d_KZxkY_0cM',
      desc: `1. Choose your desired weights and lie down on the bench.\n2. Ensure the bar is close to chest and push the bar till fully extended.\n3. Lower the bar towards your head by bending the elbows.\n4. Repeat for a number of times.`,
    },
    {
      id: 50,
      title: 'Lying Dumbbell Extension',
      category: 'tricep',
      experience: 'intermediate',
      img: './images/lyingdumbbell.jpg',
      vid: 'https://www.youtube.com/embed/MO_03opCc0g',
      desc: `1. Grasping a pair of dumbbells lie down on the bench.\n2. Extend the dumbells above your head. Your palms should be facing each other.\n3. Ensure you are only bending at the elbows, ensure your elbows are fixed and pointing towards your hips, controlling the tension lower the dumbbells down beside your head until they are ear level.\n4. Holding this position, squeeze the triceps. Then bring the dumbbells back up.\n5. Do not fully extend your arms, and then repeat for a number of times.`,
    },
    {
      id: 51,
      title: 'French Press',
      category: 'tricep',
      experience: 'beginner',
      img: './images/frenchpress.jpg',
      vid: 'https://www.youtube.com/embed/JImgCWzCHwI',
      desc: `1. Grab an ez bar with desired weights.\n2. Gripping the barbell with palms facing down.\n3. Lift the bar above your head and bend your elbows slightly so the tension is focused on the triceps.\n4. Keeping your elbows fixed and pointing straight up, controlling the tension slowly lower the bar down behind your head as far as you can.\n5. Hold this position, and then controlling this tension slowly lower the bar.\n6. Do not fully extend your elbows, and then repeat this exercise for a number of times.`,
    },
    {
      id: 52,
      title: 'Bent Over Dumbbell Tricep Kickback',
      category: 'tricep',
      experience: 'beginner',
      img: './images/dumbbelltricep.jpg',
      vid: 'https://www.youtube.com/embed/ZO81bExngMI',
      desc: `1. Choose your desired dumbbell weight and then go to a bench. With one knee on bench and hand.\n2. Lean forward, bring the dumbbells up and then extend the elbows while flexing the triceps.\n3. Controlling the tension slowly lower the dumbbells back down and repeat this exercise for a number of times.`,
    },
    {
      id: 53,
      title: 'High Pulley Overhead Tricep Extension',
      category: 'tricep',
      experience: 'beginner',
      img: './images/overheadtricep.jpeg',
      vid: 'https://www.youtube.com/embed/NRENeEgaIgA',
      desc: `1. Attach a rope to the cable machine and move it as high as possilbe, while standing up.\n2. Stabding in a split stance, grip the rope overhead with palms facing each other, and lean forward.\n3. Extend the elbows and flex the triceps.\n4. Pull the rope downward until the elbows are almost fully extended and then controlling the tension slowly lower it back behind the head.\n5. Repeat for a number of times.`,
    },
    {
      id: 54,
      title: 'machine tricep extension',
      category: 'tricep',
      experience: 'beginner',
      img: './images/machinetricepextension.jpg',
      vid: 'https://www.youtube.com/embed/bSp5GIsxwJU',
      desc: `1. Sit on the machine and grip onto the handles.\n2. Breathe out and press the handles away from you by extending the elbows.\n3. Control the tension and slowly lower the handles back to the starting position and repeat this action for a number of reps.`,
    },
    {
      id: 55,
      title: 'romanian deadlift',
      category: 'legs',
      experience: 'beginner',
      img: './images/romaniandeadlift.jpg',
      vid: 'https://www.youtube.com/embed/-m45n1_x32E',
      desc: `1. Place the bar over your feet and stand with your legs apart.\n2. With a double hand grip, deadlift the bar into place at the top with the hips and kness extended.\n3. Start the RDL by pushing your hips back and leaning forward until the bar is just below knee level.\n4. Drive through the entire foot and concentrate on pushing away from the floor.\n5. Go back to the starting position and repeat for as many repetitions as you desire.`,
    },
    {
      id: 56,
      title: 'Stiff Leg Deadlift',
      category: 'legs',
      experience: 'intermediate',
      img: './images/stifflegdeadlift.jpg',
      vid: 'https://www.youtube.com/embed/1uDiW5--rAE',
      desc: `1. Place the bar over your feet and stand in a hip width stance.\n2. Push your hips back and lean forward until your upper body is nearly 90 degrees with the floor.\n3. Reach down and grip the bar using a shoulder width, double overhand grip.\n4. Make sure your spine is neutral, shins are upright, and your hips are roughly the same height as your shoulders.\n5. Push through the entire foot and focus on pushing floor away from you.\n6. Make sure the bar is in a straight line as you extend the knees and hips.\n7. Once you have locked out the hips, reverse this action.\n8. Bring the bar back to the floor, reset, and repeat this exercise for a number of times.`,
    },
    {
      id: 57,
      title: 'sumo deadlift',
      category: 'legs',
      experience: 'beginner',
      img: './images/sumodeadlift.jpg',
      vid: 'https://www.youtube.com/embed/1v4r9hht_K4',
      desc: `1. Place the bar over your feet and stand in a wide stance.\n2. Push your hips back and lean forward until your upper body is approximately 90 degrees with the floor.\n3. Reach down and grip the bar with hands being a shoulder width apart, double overhand grip.\n4. Breathe in and pull up slightly on the bar while allowing your hips to drop just like a seesaw.\n5. As you drop the hips and pull up the bar, ensure your armpits are placed exactly over the bar.\n6. Push through the entire foot and concentrate on pushing the flower away from you.\n7. Once you have locked out the hips, reverse this action.
8. Bring the bar back to the floor, reset, and repeat this for a number of times.`,
    },
    {
      id: 58,
      title: 'dumbbell squat',
      category: 'legs',
      experience: 'intermediate',
      img: './images/dumbbellsquat.jpg',
      vid: 'https://www.youtube.com/embed/v_c67Omje48',
      desc: `1. Choose a pair of dumbbells and bring them to your sides.\n2. Ensure theres a slight bend on your knees and keep your eyes forward and back straight.\n3. Make sure your head is facing forward slowly bring your body down. However make sure you don't lean forward while coming down. Your buttocks should be pushed out and drop straight down.\n4. Squat down as far as you can , and then control the tension and slowly raise your body back up by driving through your heels.\n5. Do not fully extend the knees out when you stand up, and then repeat this exercise for a number of times.`,
    },
    {
      id: 59,
      title: 'dumbbell lunge',
      category: 'legs',
      experience: 'beginner',
      img: './images/dumbbelllunge.jpeg',
      vid: 'https://www.youtube.com/embed/COKYKgQ8KR0',
      desc: `1. Select a pair of dumbbells and ensure your back is straight while standing up with knees slightly bent.\n2. Holding onto the dumbells by your sides.\n3. Step forward with your left leg while ensuring you don't lose your balance and squat down.\n4. Make sure your upper body is straight.\n5. Then push your body back up through the use of your heel.\n6. Repeat this exercise on your other leg and repeat this for a number of times.`,
    },
    {
      id: 60,
      title: 'one leg dumbbell squat',
      category: 'legs',
      experience: 'intermediate',
      img: './images/oneleg.jpg',
      vid: 'https://www.youtube.com/embed/Ll60EDemwdQ',
      desc: `1. Stand in a split position while holding onto the dumbbells.\n2. Place your back foot on a bench.\n3. Lower yourself by flexing the front knee and keep doing this until the back knee reaches the floor.\n4. Push through the front foot and extend the knee as you go back to how you started.\n5. Repeat this for a number of times.`,
    },
  ];
  export default exercise;