async function prevLists(event) {
    event.preventDefault();
        document.location.replace('/dashboard/patient-history');
  };
  
  document.querySelector('#prevLists').addEventListener('click', prevLists);
  