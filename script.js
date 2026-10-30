const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
  });
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "메뉴 열기");
    });
  });
}

// The Figma expanding-panel interaction is reproduced for pointer and keyboard users.
const panels = [...document.querySelectorAll(".gallery-panel")];
panels.forEach((panel) => {
  panel.addEventListener("mouseenter", () => {
    panels.forEach((item) => item.classList.remove("is-active"));
    panel.classList.add("is-active");
  });
  panel.addEventListener("focus", () => {
    panels.forEach((item) => item.classList.remove("is-active"));
    panel.classList.add("is-active");
  });
});

// Detail page sample data; replace these placeholders when final assets and copy are ready.
const projectData = [
  {category: "CHANNEL BRANDING / PROJECT 01",
    title: "유튜브 채널 기획",
    description: "채널 콘셉트와 콘텐츠 구조를 설계한 브랜딩 프로젝트.",
    overview: "Channel Planning",
    thumbnail: "images/project01/thumbnail.png",
    cover: "images/project01/thumbnail.png",
    alt: "유튜브 채널 기획 프로젝트 대표 이미지",
    overviewHeading: "채널의 방향을 설계하고 콘텐츠 전략을 구체화하다",
    role: "Channel Planning · Content Strategy · Branding",
    tools: "Figma · Photoshop · Illustrator",
    output: "Channel Branding / Content Planning · Channe Design",
    processImages: [
      "images/project01/planning_01.png",
      "images/project01/planning_02.png",
      "images/project01/planning_03.png",
      "images/project01/planning_04.png"
    ],
    processSteps: [
      {
        title: "채널 콘셉트 및 방향 설정",
        description: "채널의 목적과 타깃 시청자를 정의하고, 핵심 콘셉트와 차별화 방향을 설정합니다."
      },
      {
        title: "콘텐츠 및 레퍼런스 분석",
        description: "유사 채널과 관련 콘텐츠를 분석해 시장의 특징을 파악하고, 채널에 적합한 콘텐츠 방향을 도출합니다."
      },
      {
        title: "채널 브랜딩 및 기획안 제작",
        description: "채널의 분위기와 시각적 정체성을 구체화하고, 콘텐츠 구성과 운영 방향을 기획안으로 정리합니다."
      },
      {
        title: "최종 채널 브랜딩 완성",
        description: "앞서 설정한 콘셉트와 기획 방향을 종합해 채널의 시각적 요소와 콘텐츠 전략을 일관성 있게 완성합니다."
      }
    ]
    },
  {category: "VIDEO EDIT / PROJECT 02",
    title: "영상 편집",
    description: "기획·편집을 진행한 영상 콘텐츠 프로젝트.",
    overview: "Video Production",
    thumbnail: "images/project02/thumbnail.png",
    cover: "images/project02/thumbnail.png",
    alt: "영상 콘텐츠 제작 프로젝트 대표 이미지",
    overviewHeading: "영상의 흐름을 다듬고, 인트로와 아웃트로를 디자인하다",
    role: "Video Planning · Editing · Motion Graphics",
    tools: "Premiere Pro · After Effects · Photoshop · Illustrator",
    output: "Video Content / Motion Graphics",
    processImages: [
      "images/project02/process_01.jpg",
      "images/project02/process_02.jpg",
      "images/project02/process_03.png",
      "images/project02/process_04.png"
    ],
    processSteps: [
      {
        title: "영상 기획 및 구성",
        description: "콘텐츠의 주제와 전달할 메시지를 정하고, 영상의 전체적인 구성과 연출 방향을 계획합니다."
      },
      {
        title: "촬영 및 장면 구성",
        description: "기획 의도에 맞춰 필요한 장면을 촬영하고, 영상의 흐름을 고려해 장면을 구성합니다."
      },
      {
        title: "영상 편집 및 시각 효과",
        description: "장면을 연결하고 자막과 시각 효과를 적용해 영상의 전달력과 완성도를 높입니다."
      },
      {
        title: "최종 영상 완성",
        description: "영상의 흐름과 화면을 점검하고, 의도한 메시지가 효과적으로 전달되도록 최종 결과물을 완성합니다."
      }
    ]
    },
  {category: "AI ADVERTISEMENT / PROJECT 03",
    title: "환경부 분리배출 광고 모작",
    description: "AI를 활용해 광고의 장면과 분위기를 재현한 영상 프로젝트.",
    overview: "AI Advertisement",
    thumbnail: "images/project03/project03_thumbnail.jpg",
    cover: "images/project03/project03_thumbnail.jpg",
    alt: "환경부 분리배출 광고 모작 대표 이미지",
    overviewHeading: "기획부터 완성까지, 하나의 프로젝트를 만들다",
    role: "Planning & Production",
    tools: "Premiere Pro · After Effects",
    output: "Video / Digital Content",
    processImages: [
      "images/project03/process/process_01.jpg",
      "images/project03/process/process_02.png",
      "images/project03/process/process_03.png",
      "images/project03/process/process_04.png"
    ],
    processSteps: [
      {title: "기획 및 콘셉트 설정",
      description: "프로젝트의 목적과 타깃을 분석하고 제작 방향을 설정합니다."
      },
      {title: "키 이미지 제작",
      description: "장면별 키 이미지와 시각적 분위기를 구체화합니다."
      },
      {title: "영상 생성 및 편집",
      description: "영상 생성과 편집으로 장면을 연결하고 흐름을 다듬습니다."
      },
      {title: "최종 결과물 완성",
      description: "화면과 사운드를 점검해 최종 결과물을 완성합니다."
      }
    ]
  },
  {category: "UX / UI DESIGN / PROJECT 04",
    title: "쿠캣 커머스 UX/UI",
    description: "상품 탐색부터 가격·혜택 비교까지, 사용자의 구매 결정 과정을 더 직관적이고 편리하게 개선하는 UX/UI 프로젝트.",
    overview: "UX / UI Design",
    thumbnail: "images/project04/project02_thumbnail.png",
    cover: "images/project04/project02_thumbnail.png",
    alt: "쿠캣 앱 UX/UI 디자인 대표 이미지",
    overviewHeading: "고민하는 시간을 줄이고, 나에게 맞는 한 끼를 발견하다",
    role: "UX Research · UX/UI Design",
    tools: "Figma",
    output: "App UI / Interactive Prototype",
    processImages: [
      "images/project04/process/process_01.jpg",
      "images/project04/process/process_02.jpg",
      "images/project04/process/process_03.jpg",
      "images/project04/process/process_04.jpg"
    ],
    processSteps: [
      {title: "UX 리서치 및 사용자 분석",
      description: "사용자의 쇼핑 행동과 불편 사항을 조사하고 주요 문제를 파악합니다."
      },
      {title: "경쟁 서비스 분석",
      description: "유사 커머스 서비스의 탐색·비교 경험을 분석하고 개선 기회를 도출합니다."
      },
      {title: "와이어프레임 및 화면 설계",
      description: "사용자가 상품을 쉽게 탐색하고 비교할 수 있도록 화면 구조와 흐름을 설계합니다."
      },
      {title: "최종 UI 디자인 및 프로토타입",
      description: "쿠캣 앱의 디자인 방향을 적용하고 주요 화면과 사용자 이동 흐름을 구체화합니다."
      }
    ]
  }
];
const params = new URLSearchParams(window.location.search);
const projectIndex = Math.min(3, Math.max(0, Number(params.get("project")) || 0));
const project = projectData[projectIndex];
console.log("현재 프로젝트 제목:", project.title);
console.log("현재 프로젝트 번호:", projectIndex);
const prevProjectLink = document.querySelector("#prev-project");
const nextProjectLink = document.querySelector("#next-project");
if (prevProjectLink) {
  const prevIndex = (projectIndex - 1 + projectData.length) % projectData.length;
  prevProjectLink.href = `project.html?project=${prevIndex}`;
}
if (nextProjectLink) {
  const nextIndex = (projectIndex + 1) % projectData.length;
  nextProjectLink.href = `project.html?project=${nextIndex}`;
}

const categoryNode = document.querySelector("#project-category");
const titleNode = document.querySelector("#project-title");
const descriptionNode = document.querySelector("#project-description");
const overviewCategoryNode = document.querySelector("#overview-category");
if (categoryNode && project) categoryNode.textContent = project.category;
if (titleNode && project) titleNode.textContent = project.title + ".";
if (descriptionNode && project) descriptionNode.textContent = project.description;
if (overviewCategoryNode && project) overviewCategoryNode.textContent = project.overview;

// Accessible gallery lightbox with previous/next controls.
const lightbox = document.querySelector(".lightbox");
if (lightbox) {
  const lightboxContent = lightbox.querySelector(".lightbox-content");
  const count = lightbox.querySelector(".lightbox-count");
  const images = [...document.querySelectorAll(".detail-image")];
  let activeImage = 0;
  const showImage = (index) => {
    activeImage = (index + images.length) % images.length;
    const source = images[activeImage];
    lightboxContent.innerHTML = "";
    const label = document.createElement("span");
    label.textContent = source.textContent.trim() || `GALLERY IMAGE ${activeImage + 1}`;
    lightboxContent.append(label);
    lightboxContent.style.background = getComputedStyle(source).backgroundColor || "#e8e4d8";
    count.textContent = `${String(activeImage + 1).padStart(2,"0")} / ${String(images.length).padStart(2,"0")}`;
  };
  const openLightbox = (index) => {
    showImage(index);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox-close").focus();
  };
  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };
  images.forEach((image, index) => image.addEventListener("click", () => openLightbox(index)));
  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => showImage(activeImage - 1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => showImage(activeImage + 1));
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showImage(activeImage - 1);
    if (event.key === "ArrowRight") showImage(activeImage + 1);
  });
}

const projectCoverImage = document.querySelector("#project-cover-image");
if (projectCoverImage && project) {
  projectCoverImage.src = project.cover;
  projectCoverImage.alt = project.alt;
}

// Change process images according to the selected project
const processImages = document.querySelectorAll(".process-image img");

if (project.processImages && processImages.length > 0) {
  processImages.forEach((img, index) => {
    if (project.processImages[index]) {
      img.src = project.processImages[index];
      img.alt = `${project.title} 제작 과정 ${index + 1}`;
    }
  });
}

// Change process titles and descriptions according to the selected project
if (project.processSteps) {
  project.processSteps.forEach((step, index) => {
    const title = document.querySelector(`#process-title-${index}`);
    const description = document.querySelector(`#process-description-${index}`);
    if (title) {title.textContent = step.title;}
    if (description) {description.textContent = step.description;}
  });
}

// Show the appropriate final result for each project
// FINAL VIDEO section
const finalVideo = document.querySelector("#project-final-video");
const finalUI = document.querySelector("#project-final-ui");
const finalVideoProject02 = document.querySelector("#final-video-project02");
const finalVideoProject03 = document.querySelector("#final-video-project03");
// PROJECT 01: 유튜브 채널 기획
if (projectIndex === 0) {
  if (finalVideo) finalVideo.style.display = "none";
  if (finalUI) finalUI.style.display = "none";
}
// PROJECT 02: 영상 콘텐츠 제작
else if (projectIndex === 1) {
  if (finalVideo) finalVideo.style.display = "block";
  if (finalUI) finalUI.style.display = "none";
  if (finalVideoProject02) finalVideoProject02.style.display = "block";
  if (finalVideoProject03) finalVideoProject03.style.display = "none";
}
// PROJECT 03: 환경부 분리배출 광고 모작
else if (projectIndex === 2) {
  if (finalVideo) finalVideo.style.display = "block";
  if (finalUI) finalUI.style.display = "none";
  if (finalVideoProject02) finalVideoProject02.style.display = "none";
  if (finalVideoProject03) finalVideoProject03.style.display = "block";
}
// PROJECT 04: 쿠캣 커머스 UX/UI
else if (projectIndex === 3) {
  if (finalVideo) finalVideo.style.display = "none";
  if (finalUI) finalUI.style.display = "none";
}

// Update project overview according to the selected project
const overviewHeading = document.querySelector("#overview-heading");
const overviewRole = document.querySelector("#overview-role");
const overviewTools = document.querySelector("#overview-tools");
const overviewOutput = document.querySelector("#overview-output");
if (project) {
  if (overviewHeading && project.overviewHeading) {overviewHeading.textContent = project.overviewHeading + ".";}
  if (overviewRole && project.role) {overviewRole.textContent = project.role;}
  if (overviewTools && project.tools) {overviewTools.textContent = project.tools;}
  if (overviewOutput && project.output) {overviewOutput.textContent = project.output;}
}

// 스크롤 위치에 따라 헤더 배경 변경
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const updateHeader = () => {
    if (window.scrollY > 50) {siteHeader.classList.add('scrolled');} 
    else {siteHeader.classList.remove('scrolled');}
  };
  window.addEventListener('scroll', updateHeader);
  updateHeader();
}