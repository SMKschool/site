// Click show or hide
function toggleMobileMenu() {
  var mobileMenu = document.getElementById("ul");
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

// New items store in js
const newsData = [
  {
    title: "ប្ដូរProfile Facebookដើម្បីអបអរពិធីបើកកាដ្ឋានព្រែកជីកហ្វូណនតេជោ",
    content: "លោកនាយក លោកនាយករង លោកគ្រូ អ្នកគ្រូនៃសាលាអនុវិទ្យាល័យសាមគ្គីបានប្ដូរProfile Facebookដើម្បីត្រៀមខ្លួនអបអរពិធីបើកការដ្ឋានព្រែកជីកហ្វូណនតេជោ ដែលគម្រោងព្រែកជីកហ្វូណនតេជោចាប់ផ្ដើមនៅថ្ងៃទី០៥ ខែសីហា ឆ្នាំ២០២៤ខាងមុខនេះ។",
    author: "My Langdy",
    date: "២៤-កក្កដា-២០២៤",
    images: ["FunonTecho/0.jpg","FunonTecho/1.jpg","FunonTecho/2.jpg","FunonTecho/3.jpg","FunonTecho/4.jpg","FunonTecho/5.jpg","FunonTecho/6.jpg","FunonTecho/7.jpg","FunonTecho/8.jpg","FunonTecho/9.jpg","FunonTecho/10.jpg","FunonTecho/11.jpg","FunonTecho/12.jpg","FunonTecho/13.jpg","FunonTecho/14.jpg","FunonTecho/15.jpg",]
  },
  {
    title: "ប្រជុំជាមួយអាជ្ញាធរឃុំស៊ុង និងឃុំសំឡូត",
    content: "នៅថ្ងៃទី១៧ ខែកក្កដា ឆ្នាំ២០២៤ វេលាម៉ោង ៨:០០នាទីព្រឹក លោកនាយក លោកនាយករង និងលោកគ្រូអ្នកគ្រូ នៃសាលាអនុវិទ្យាល័យសាមគ្គី បានប្រជុំជាមួយអាជ្ញាធរឃុំស៊ុង និងឃុំសំឡូត ស្ដីអំពីដំណើរការ និងនីតិវិធីនៃការកសាងបន្ទប់កុំព្យូទ័រ។",
    author: "My Langdy",
    date: "១៧-កក្កដា-២០២៤",
    images: ["images-post/july02-1.jpg", "images-post/july02-2.jpg", "images-post/july02-3.jpg", "images-post/july02-4.jpg"]
  },
  {
    title: "ពិនិត្យនិងវាយតម្លៃគម្រោងសាងសង់បន្ទប់កុំព្យូទ័រ",
    content: "នៅរសៀលថ្ងៃអង្គារ ទី១៦ ខែកក្កដា ឆ្នាំ២០២៤ លោក ឃុន ប៊ុនលី ប្រធានអង្គការ KHEN ប្រចាំស្រុកសំឡូត បានចុះមកពិនិត្យ និងវាយតម្លៃគម្រោងសាងសង់បន្ទប់កុំព្យូទ័រ។  លោកក៏បានលើកទឹកចិត្តឱ្យសាលាគៀងគររកសិស្សដែលបានបោះបង់ការសិក្សាចាប់ពីអាយុ១៥ឆ្នាំ ដល់២៥ឆ្នាំ មកសិក្សាកុំព្យូទ័រនៅសាលាអនុវិទ្យាល័យសាមគ្គីនេះផងដែរ។",
    author: "My Langdy",
    date: "១៦-កក្កដា-២០២៤",
    images: ["images-post/July01-2.jpg", "images-post/july01-1.jpg"]
  },
  {
    title: "ម្ចាស់គម្រោងជំនួយចុះមកសិក្សាទីតាំងសាងសង់បន្ទប់កុំព្យូទ័រនៅសាលាអនុវិ.សាមគ្គី",
    content: "នៅថ្ងៃទី២៨ ខែមិថុនា ឆ្នាំ២០២៤ ប្រធានអង្គការ IGIS Asset Management និង The Right Hands Korea លោកប្រធានអនុវត្តគម្រោងដោយអង្គការខ្មែរដើម្បីអប់រំស្រុកសំឡូត(KHEN) និងលោកប្រធានការិយាល័យអប់រំ យុវជន និងកីឡាស្រុកសំឡូត បានចុះមកសិក្សាអំពីទីតាំងសម្រាប់សាងសង់បន្ទប់កុំព្យូទ័រនៅសាលាអនុវិទ្យាល័យ សាមគ្គី។",
    author: "My Langdy",
    date: "២៨-មិថុនា-២០២៤",
    images: ["images-post/doe1.jpg", "images-post/doe2.jpg","images-post/doe3.jpg","images-post/doe4.jpg"]
  },
  {
    title: "ក្រុមការងារមន្ទីរអប់រំ យុវជន និងកីឡាខេត្តបាត់ដំបង(ការិយាល័យគណនេយ្យ)បានចុះមកពិនិត្យបញ្ជីហិរញ្ញវត្ថុ",
    content: "នៅរសៀលថ្ងៃព្រហស្បតិ៍ ទី២៧ ខែមិថុនា ឆ្នាំ ២០២៤ ក្រុមការងារមន្ទីរអប់រំខេត្តបាត់ដំបង (ការិយាល័យគណនេយ្យ)បានចុះមកពិនិត្យមើលកិច្ចបញ្ជីការហិរញ្ញវត្ថុ នៅអនុវិទ្យាល័យ សាមគ្គី។",
    author: "My Langdy",
    date: "២៧-មិថុនា-២០២៤",
    images: ["images-post/poe1.jpg", "images-post/poe2.jpg","images-post/poe3.jpg"]
  },
  {
    title: "អាជ្ញាធរចុះមកផ្សព្វផ្សាយអំពីច្បាប់ចរាចរណ៍ ក្មេងទំនើង គ្រឿងញៀន និងសុវត្ថិភាពសង្គម",
    content: "នៅព្រឹកថ្ងៃទី២០ ខែមិថុនា ឆ្នាំ២០២៤ លោកអធិការរងនៃអធិការដ្ឋានស្រុកសំឡូត បានសហការជាមួយអាជ្ញាធររដ្ឋបាលឃុំស៊ុង បានដឹកនាំក្រុមការងារចុះមកផ្សព្វផ្សាយអំពីច្បាប់ចរាចរណ៍ ក្មេងទំនើង គ្រឿងញៀន និងសុវត្ថិភាពសង្គមដល់សិស្សានុសិស្សនៃសាលាអនុវិទ្យាល័យសាមគ្គី។",
    author: "My Langdy",
    date: "២០-មិថុនា-២០២៤",
    images: ["images-post/p1.jpg", "images-post/p2.jpg","images-post/p3.jpg","images-post/p4.jpg","images-post/p5.jpg","images-post/p6.jpg","images-post/p7.jpg","images-post/p8.jpg"]
  },
  {
    title: "គណៈគ្រប់គ្រងសាលារៀនប្រជុំកំណត់ទីតាំងសាងសង់បន្ទប់កុំព្យូទ័រ",
    content: "នៅព្រឹកថ្ងៃសុក្រ ទី១៤ ខែមិថុនា ឆ្នាំ២០២៤ គណៈគ្រប់គ្រងសាលាអនុវិទ្យាល័យសាមគ្គី (គ.គ.ស)បានប្រជុំពិភាក្សាកំណត់ទីតាំងសម្រាប់សាងសង់បន្ទប់កុំព្យូទ័រ ដែលជាជំនួយរបស់អង្គការ KHEN ប្រចាំស្រុកសំឡូត។",
    author: "My Langdy",
    date: "១៤-មិថុនា-២០២៤",
    images: ["images-post/p01.jpg", "images-post/p02.jpg","images-post/p03.jpg","images-post/p04.jpg","images-post/p05.jpg"]
  },
  {
    title: "លោកប្រធានការិយាល័យអប់រំស្រុកសំឡូត ជួបសំណេះសំណាលជាមួយលោកគ្រូអ្នកគ្រូ នៃសាលាអនុវិទ្យាល័យសាមគ្គី",
    content: "លោកប្រធានការិយាល័យអប់រំនៃរដ្ឋបាលស្រុកសំឡូត បានជួបសំណេះសំណាលជាមួយលោកគ្រូអ្នកគ្រូនៃសាលាអនុវិទ្យាល័យសាមគ្គី។",
    author: "My Langdy",
    date: "០៦-មិថុនា-២០២៤",
    images: ["images-post/9.jpg", "images-post/10.jpg","images-post/11.jpg"]
  },
  {
    title: "កិច្ចប្រជុំពាក់ព័ន្ធគ្រឿងញៀន ក្មេងទំនើង និងសន្ដិសុខសណ្ដាប់ធ្នាប់សង្គម",
    content: "នៅថ្ងៃទី៥ ខែមិថុនា ឆ្នាំ២០២៤ លោកអភិបាលរងនៃគណៈអភិបាលស្រុកសំឡូត និងក្រុមកាងារបានចុះពិនិត្យ និងណែនាំការងារពាក់ព័ន្ធ គ្រឿងញៀន ក្មេងទំនើង និងសន្តិសុខសុវត្ថិភាពសង្គម ជាមួយលោកគ្រូ អ្នកគ្រូនៃអនុវិទ្យាល័យសាមគ្គី ។",
    author: "My Langdy",
    date: "០៥-មិថុនា-២០២៤",
    images: ["images-post/6.jpg","images-post/7.jpg","images-post/8.jpg"]
  },
  {
    title: "សកម្មភាពចាក់ដីពង្រីកទីធ្លាសាលារៀន",
    content: "នៅថ្ងៃទី១១ ខែឧសភា ឆ្នាំ២០២៤ លោកមេឃុំស៊ុង លោកមេភូមិចំការចេក និងក្រុមការងារបានកៀងគរថវិកាពីប្រជាជនក្នុងការស្ដារអាងយកដីចាក់ពង្រីកទីធ្លាសាលារៀនអនុវិទ្យាល័យសាមគ្គី បានសរុបចំនួន ៥០០ឡាន។",
    author: "My Langdy",
    date: "១២-ឧសភា-២០២៤",
    images: ["images-post/1.jpg", "images-post/2.jpg","images-post/3.jpg","images-post/4.jpg","images-post/5.jpg"]
  },
  
  
];


const newsContainer = document.getElementById("news-container");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDate = document.getElementById("popup-date");
const popupAuthor = document.getElementById("popup-author");
const popupContent = document.getElementById("popup-content");
const popupImages = document.getElementById("popup-images");
const closeButton = document.querySelector(".close-button");
const loadingText = document.getElementById("loading-text");
const showMoreButton = document.createElement("button");
showMoreButton.textContent = "មើលច្រើនទៀត ...";
showMoreButton.classList.add("show-more-button");

// Show only the 5 latest posts
const latestPosts = newsData.slice(0, 5);

latestPosts.forEach(item => {
  const newsItem = document.createElement("div");
  newsItem.classList.add("news-item");

  const img = document.createElement("img");
  img.src = item.images[0];
  newsItem.appendChild(img);

  const titleElement = document.createElement("h3");
  titleElement.textContent = item.title + " - " + item.date;
  newsItem.appendChild(titleElement);

  const contentElement = document.createElement("p");
  contentElement.textContent = item.content.slice(0, 100) + "..."; // Show the first 100 characters of the content
  newsItem.appendChild(contentElement);

  newsItem.addEventListener("click", () => showPopup(item));
  newsContainer.appendChild(newsItem);
});

newsContainer.appendChild(showMoreButton);

showMoreButton.addEventListener("click", () => {
  loadingText.style.display = "block";
  setTimeout(() => {
    newsContainer.innerHTML = "";
    newsData.forEach(item => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");
  
      const img = document.createElement("img");
      img.src = item.images[0];
      newsItem.appendChild(img);
  
      const titleElement = document.createElement("h3");
      titleElement.textContent = item.title + " - " + item.date;
      newsItem.appendChild(titleElement);
  
      const contentElement = document.createElement("p");
      contentElement.textContent = item.content.slice(0, 100) + "..."; // Show the first 100 characters of the content
      newsItem.appendChild(contentElement);
  
      newsItem.addEventListener("click", () => showPopup(item));
      newsContainer.appendChild(newsItem);
    });
    loadingText.style.display = "none";
  }, 2000); // Show loading text for 2 seconds
});

function showPopup(item) {
  loadingText.style.display = "block";
  setTimeout(() => {
    popup.style.display = "block";
    popupTitle.textContent = item.title;
    popupDate.textContent = item.date;
    popupAuthor.textContent = item.author;
    popupContent.textContent = item.content;

    popupImages.innerHTML = "";
    item.images.forEach(imageUrl => {
      const img = document.createElement("img");
      img.src = imageUrl;
      popupImages.appendChild(img);
    });

    loadingText.style.display = "none";
  }, 2000); // Show loading text for 2 seconds
}

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});



// Top cover of web show button click hide or show map
function showorHide() {
  // Get the div element with the class "showorHide"
  const showOrHideDiv = document.querySelector('.showorHide');

  // Get the button element
  const showHideButton = document.querySelector('.cta');

  // Toggle the visibility of the div
  if (showOrHideDiv.style.display === 'none') {
    showOrHideDiv.style.display = 'block'; // Show the div
    showHideButton.textContent = 'បិទការបង្ហាញ'; // Change the button text to "Hide"
  } else {
    showOrHideDiv.style.display = 'none'; // Hide the div
    showHideButton.textContent = 'មើលការបង្ហាញទីតាំង'; // Change the button text to "Show"
  }
}
// Student chart
const labels = [ '2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024'];
const data = {
  labels: labels,
  datasets: [{
    label: 'ចំនួនសិស្សសរុបតាមឆ្នាំសិក្សា',
    data: [311, 294, 357, 394, 381, 383],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)'
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    responsive: true,
    maintainAspectRatio: false
  }
};

const myChart = new Chart(document.getElementById('myChart'), config);
