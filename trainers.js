const trainers = [
    {
      name: "Orfan - Fitness Trainer",
      experience: "6 years",
      achievements: [
        "Completed 100+ client transformations",
        "Certified ACE Personal Trainer",
        "Hosted national fitness bootcamps"
      ],
      certificates: [
        "ACE Certified Trainer",
        "CPR & First Aid",
        "TRX Level 1"
      ]
    },
    {
      name: "Reza - Bodybuilding Coach",
      experience: "5 years",
      achievements: [
        "Won Mr. Afghanistan 2019",
        "Coached 2 national champions",
        "IFBB Level 3 Athlete"
      ],
      certificates: [
        "IFBB Level 3 Coach",
        "Advanced Nutrition for Muscle Growth",
        "Olympic Strength Coaching Cert."
      ]
    },
    {
      name: "Parwis - Fat Loss Specialist",
      experience: "7 years",
      achievements: [
        "Transformed 500+ clients",
        "Keto & Intermittent Fasting Expert",
        "Online course creator on fat loss"
      ],
      certificates: [
        "Precision Nutrition Level 2",
        "Fat Loss Specialist Cert.",
        "Holistic Weight Management Diploma"
      ]
    }
  ];
  
  function showProfile(index) {
    const trainer = trainers[index];
    document.getElementById("trainerName").textContent = trainer.name;
    document.getElementById("experience").textContent = trainer.experience;
  
    const achievementsList = document.getElementById("achievements");
    const certificatesList = document.getElementById("certificates");
  
    achievementsList.innerHTML = "";
    certificatesList.innerHTML = "";
  
    trainer.achievements.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      achievementsList.appendChild(li);
    });
  
    trainer.certificates.forEach(cert => {
      const li = document.createElement("li");
      li.textContent = cert;
      certificatesList.appendChild(li);
    });
  
    document.getElementById("trainerDetail").style.display = "block";
  }
  
  function closeProfile() {
    document.getElementById("trainerDetail").style.display = "none";
  }