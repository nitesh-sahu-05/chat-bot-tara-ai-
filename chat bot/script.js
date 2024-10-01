 // A simple chatbot that responds with some predefined answers



 function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
      output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
      output = "My name is Tara, I'm a chatbot.";
    } else if (input.includes("what can you do")) {
      output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("tell me a joke")) {
      output = "Why did the chicken go to the seance? To get to the other side.";
    } else if (input.includes("I often feel depressed")) {
      output = "dont feel bad just leasten to music and take a deep breath Breathe Me";
    }else if (input.includes("i am depressed what can i do")) {
      output = "Stay in touch. Don't withdraw from life. ...Be more active. Take up some form of exercise. ...Face your fears. Don't avoid the things you find difficult. ...Don't drink too much alcohol. For some people, alcohol can become a problem. ...Try to eat a healthy diet. ...Have a routine.";
    }else if (input.includes("am i worthless")) {
      output = "You are valuable because you exist. You have unique skills and qualities that make you who you are. You have the potential to make a positive impact on the world. You are loved and worthy of love. You are worthy because you are you.";
    }else if (input.includes("can i do anything right")) {
      output = "Yes, you can do anything right. You are a valuable person and you can achieve anything you want to achieve.";
    }else if (input.includes("i am a failure")) {
      output = "You are not a failure. You are a valuable person and you can achieve anything you want to achieve.";
    }else if (input.includes("no one likes me")) {
      output = "You are a valuable person and you can achieve anything you want to achieve.";
    }else if (input.includes("why do i feel this way")) {
      output = "You are a valuable person and you can achieve anything you want to achieve.";
    }else if (input.includes("is there a point to life")) {
      output = "Life has a purpose, and it's up to you to find it. You have the power to shape your own destiny and create your own meaning. Don't let others define your worth or your purpose. You are unique and valuable, and your life has a purpose that only you can fulfill.";
    }else if (input.includes("will i ever be happy")) {
      output = "Happiness is a choice, and it's up to you to decide if you want to be happy. You have the power to change your thoughts and your circumstances, so choose to be happy.";
    }else if (input.includes("what's the meaning of it all")) {

      output = "The meaning of life is a personal and subjective concept. It can be different for everyone. Some people find meaning in relationships, family, work, or personal growth. It's about finding what brings you joy and fulfillment. Remember, you have the power to shape your own meaning and create a meaningful life.";
    }else if (input.includes("i am not feeling good suggest me some song")) {
      output = "this is some song that you can listen to overcome your depression “Unsteady” by X Ambassadors. ...“Never Let Me Go” by Florence + The Machine. ...“Paint it Black” by The Rolling Stones. ...“Breathe Me” by Sia. ...“Fade to Black” by Metallica. ...“Evryboy Hurts” by R.E.M. ...“Unwell” by Matchbox Twenty. ...“Be OK” by Ingrid Michaelson.";
    }else if (input.includes("Am I normal")) {
      output = "Yes, you are normal. You are a valuable person and you can achieve anything you want to achieve.";
    }else if (input.includes("Will I ever feel better")) {
      output = "Yes, you will feel better. It's a common experience to feel overwhelmed or down. Remember, feelings are temporary. Here are some steps that can help:Reach out: Talk to a friend, family member, or therapist. Sharing your feelings can be incredibly helpful.Practice self-care: Engage in activities you enjoy, get enough sleep, and eat nutritious food.";
    }else if (input.includes("Can I still achieve my goals")) {
      output = "Yes, you can still achieve your goals. You are a valuable person and you can achieve anything you want to achieve.";
    }else if (input.includes("Do people really care about me")) {
      output = "Absolutely, people do care about you. It might not always feel like it, especially when you're going through tough times, but there are people who genuinely value your presence in their lives.";
    }else if (input.includes("How can I be happy")) {
      output = "Happiness is a choice, and it's up to you to decide if you want to be happy. You have the power to change your thoughts and your circumstances, so choose to be happy.";
    }else if (input.includes("What should I do")) {
      output = "Take a deep breath and think about what you can do to make yourself feel better. You can also try to find a hobby or activity that you enjoy.";
    }else if (input.includes("Will I ever find love")) {
      output = "Yes, you will find love. It might not happen immediately, and the journey may have its ups and downs, but love is a universal experience that many people find throughout their lives.";
    }else if (input.includes("Am I physically sick")) {
      output = "As an AI language model, I cannot provide a definitive diagnosis of whether you are physically sick. Only a healthcare professional can accurately assess your health.";
    } else if (input.includes("What are the common signs of depression")) {
      output = "Depression can manifest in various ways, but some common signs include persistent sadness, loss of interest in activities, changes in appetite or sleep patterns, feelings of guilt or worthlessness, and difficulty concentrating.";
    } else if (input.includes("How does smoking affect mental health")) {
      output = "Smoking can have a negative impact on mental health. It can lead to anxiety, depression, and other mental health issues. Quitting smoking can improve your mental health and overall well-being.";
    } else if (input.includes("What are the benefits of meditation")) {
      output = "Meditation can have numerous benefits for mental health, including reducing stress, anxiety, and depression. It can also improve focus and concentration, boost self-awareness, and promote emotional well-being.";
    } else if (input.includes("How can I improve my self-esteem")) {
      output = "Improving self-esteem involves building a positive self-image, challenging negative thoughts, and focusing on your strengths and accomplishments. It's important to set realistic goals, practice self-compassion, and seek support from others.";
    } else if (input.includes("What are some ways to cope with anxiety")) {
      output = "There are several ways to cope with anxiety, including relaxation techniques, mindfulness, cognitive-behavioral strategies, and seeking support from friends, family, or a mental health professional.";
    } else if (input.includes("How can I manage my anger")) {
      output = "Anger management involves identifying triggers, practicing relaxation techniques, and reframing negative thoughts. It's important to communicate your feelings assertively and seek support from others.";
    } else if (input.includes("What are the benefits of using mindfulness exercises for anxiety")) {
      output = "Mindfulness exercises can help reduce anxiety by increasing awareness of present-moment experiences, promoting relaxation, and fostering a sense of inner peace. Regular practice can lead to improved emotional regulation and overall well-being.";
    } else if (input.includes("How can I improve my relationships")) {
      output = "Improving relationships involves communication, empathy, active listening, and setting boundaries. It's important to understand and respect others' perspectives, express your feelings openly, and maintain healthy boundaries in all relationships.";
    } else if (input.includes("What are the benefits of exercise for mental health")) {
      output = "Exercise has numerous benefits for mental health, including reducing stress, anxiety, and depression. It can also improve mood, boost self-esteem, and promote overall well-being.";
    } else if (input.includes("How can I manage my time better")) {
      output = "Time management involves prioritizing tasks, setting goals, and creating a schedule. It's important to learn to delegate, avoid procrastination, and take breaks to maintain productivity and prevent burnout.";
    } else if (input.includes("What are the benefits of getting enough sleep")) {
      output = "Getting enough sleep is crucial for mental and physical health. It can improve mood, cognitive function, and overall well-being. Lack of sleep can lead to irritability, anxiety, and other health issues.";
    } else if (input.includes("How can social support impact mental health")) {
      output = "Social support can have a significant impact on mental health. It can reduce stress, improve mood, and promote overall well-being. Building strong relationships and seeking support from others can be crucial for managing mental health challenges.";
    } else if (input.includes("What are the benefits of gratitude journaling")) {
      output = "Gratitude journaling can have numerous benefits for mental health, including reducing stress, anxiety, and depression. It can also improve mood, boost self-esteem, and promote overall well-being.";
    } else if (input.includes("How can I reduce my stress levels")) {
      output = "Reducing stress levels involves identifying sources of stress, practicing relaxation techniques, and engaging in activities that bring you joy. It's important to set boundaries, prioritize self-care, and seek support from others.";
    } else if (input.includes("What are the benefits of positive affirmations")) {
      output = "Positive affirmations can have numerous benefits for mental health, including reducing stress, anxiety, and depression. It can also improve mood, boost self-esteem, and promote overall well-being.";
    } else if (input.includes("How can I improve my focus and concentration")) {
      output = "Improving focus and concentration involves creating a structured environment, setting goals, and breaking tasks into manageable steps. It's important to minimize distractions, practice mindfulness, and seek support from others.";
    } else if (input.includes("What are the benefits of regular exercise for mental health")) {
      output = "Regular exercise has numerous benefits for mental health, including reducing stress, anxiety, and depression. It can also improve mood, boost self-esteem, and promote overall well-being.";
    } else if (input.includes("How can I improve my memory")) {
      output = "Improving memory involves engaging in activities that challenge your brain, such as reading, puzzles, and learning new skills. It's important to stay mentally active, practice mindfulness, and seek support from others.";
    } else if (input.includes("What are some common triggers for anxiety")) {
      output = "Common triggers for anxiety can include stressful situations, traumatic events, genetic factors, and certain personality traits. It's important to identify your triggers and develop coping strategies to manage anxiety effectively.";
    } else if (input.includes("How can I manage my anger")) {
      output = "Anger management involves identifying triggers, practicing relaxation techniques, and reframing negative thoughts. It's important to communicate your feelings assertively and seek support from others.";
    } else if (input.includes("What are the benefits of using mindfulness exercises for anxiety")) {
      output = "Mindfulness exercises can help reduce anxiety by increasing awareness of present-moment experiences, promoting relaxation, and fostering a sense of inner peace. Regular practice can lead to improved emotional regulation and overall well-being.";
    } else if (input.includes("How can I improve my relationships")) {
      output = "Improving relationships involves communication, empathy, active listening, and setting boundaries. It's important to understand and respect others' perspectives, express your feelings openly, and maintain healthy boundaries in all relationships.";
    } else if (input.includes("What are the benefits of exercise for mental health")) {
      output = "Exercise has numerous benefits for mental health, including reducing stress, anxiety, and depression. It can also improve mood, boost self-esteem, and promote overall well-being.";
    } else if (input.includes("How can cognitive-behavioral therapy (CBT) help with PTSD")) {
      output = "CBT can help with PTSD by addressing negative thought patterns, challenging traumatic memories, and promoting coping strategies. It's important to seek support from a mental health professional to manage PTSD effectively.";
    } else if (input.includes("What are the benefits of using mindfulness exercises for PTSD")) {
      output = "Mindfulness exercises can help reduce PTSD symptoms by increasing awareness of present-moment experiences, promoting relaxation, and fostering a sense of inner peace. Regular practice can lead to improved emotional regulation and overall well-being.";
    } else if (input.includes("How can I improve my relationships")) {
      output = "Improving relationships involves communication, empathy, active listening, and setting boundaries. It's important to understand and respect others' perspectives, express your feelings openly, and maintain healthy boundaries in all relationships.";
    } else if (input.includes("What are the benefits of exercise for mental health")) {
      output = "Exercise has numerous benefits for mental health, including reducing stress, anxiety, and depression. It can also improve mood, boost self-esteem, and promote overall well-being.";
    } else if (input.includes("How can I manage my time better")) {
      output = "Time management involves prioritizing tasks, setting goals, and creating a schedule. It's important to learn to delegate, avoid procrastination, and take breaks to maintain productivity and prevent burnout.";
    } else if (input.includes("What are the benefits of getting enough sleep")) {
      output = "Getting enough sleep is crucial for mental and physical health. It can improve mood, cognitive function, and overall well-being. Lack of sleep can lead to irritability, anxiety, and other health issues.";
    }else {
      output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
  }

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });




  //login page

var quizform=document.querySelector("#quiz-form")
  var loginForm = document.querySelector(".login-container");
  var container = document.querySelector(".container");
var loginButton = document.querySelector("#submit-button");


loginButton.addEventListener("click", function() {
  container.style.display = "block";
  loginForm.style.display = "none";
  quizform.style.display="none";
});

// loginButton.addEventListener("focus",function(){
//   container.style.display="block"
// })

// loginButton.addEventListener("blur",function(){
//   loginForm.style.display="none"
// })