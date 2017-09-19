const panelActiveWebcam = $('#panel-webcam')
panelActiveWebcam.click(function(){
  $('#webcam').removeClass('hidden')
  $('#optionsIdPhoto').addClass('hidden')

  // Grab elements, create settings, etc.
  const video = document.getElementById('video');

  // Get access to the camera!
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want image now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          video.src = window.URL.createObjectURL(stream);
          video.play();
      });
  }

  // Elements for taking the snapshot
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  // Trigger photo take
  document.getElementById("snap").addEventListener("click", function() {
  	context.drawImage(video, 0, 0, 480, 320);
    // canvas.toDataURL() para guardar foto
  });
})

const saveImageBtn = $('#savePhotoWebcam')
saveImageBtn.click(function() {
  $('#optionsIdPhoto').removeClass('hidden')
  $('#webcam').addClass('hidden')
})
