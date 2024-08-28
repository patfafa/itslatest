document.addEventListener('DOMContentLoaded', (event) => {
  const journeyText = new Letterize({
      targets: ".journey-text div"
  });

  anime.timeline({loop: false})
      .add({
          targets: '.journey-text',
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeInOutQuad'
      })
      .add({
          targets: journeyText.listAll,
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(100),
          duration: 800,
          easing: 'easeOutExpo'
      });

  // Simple placeholder function for invite code submission
  document.querySelector('button').addEventListener('click', function() {
      const inviteCode = document.querySelector('input[type="text"]').value;
      if (inviteCode) {
          alert('Invite code submitted: ' + inviteCode);
      } else {
          alert('Please enter an invite code.');
      }
  });
});
