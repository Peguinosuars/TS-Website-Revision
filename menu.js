// 모든 페이지에 공통으로 삽입될 내비게이션 드로어 HTML 템플릿
const commonMenuHTML = `
    <div class="drawer-overlay" id="drawerOverlay" onclick="toggleDrawer()"></div>
    
    <div class="nav-drawer" id="navDrawer">
        
        <div class="menu-category">
            <h3 onclick="toggleAccordion(this)">ABOUT <span class="arrow">▼</span></h3>
            <ul class="drawer-sub-menu">
                <li><a href="about-what.html">What is TS</a></li>
                <li><a href="about-why.html">Why TS</a></li>
                <li><a href="about-chair.html">Message from the Chair</a></li>
                <li><a href="about-mission.html">Mission & History & Vision</a></li>
                <li><a href="about-contact.html">Contact US</a></li>
            </ul>
        </div>

        <div class="menu-category">
            <h3 onclick="toggleAccordion(this)">PEOPLE <span class="arrow">▼</span></h3>
            <ul class="drawer-sub-menu">
                <li><a href="people-faculty.html">Faculty</a></li>
                <li><a href="people-staff.html">Administrative Staff</a></li>
            </ul>
        </div>

        <div class="menu-category">
            <h3 onclick="toggleAccordion(this)">ACADEMICS <span class="arrow">▼</span></h3>
            <div class="drawer-sub-menu">
                <div class="sub-depth-group" style="margin-top: 5px;">
                    <span class="sub-depth-title" style="font-size: 0.9rem; color: var(--suny-navy); font-weight: bold; display: block; margin-bottom: 5px;">Undergraduate (UGRD)</span>
                    <div class="sub-depth-links" style="padding-left: 15px; display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px;">
                        <a href="academics-ugrd-program.html" style="font-weight: 500; color: #666; font-size: 0.88rem;">• Program</a>
                        <a href="academics-ugrd-catalog.html" style="font-weight: 500; color: #666; font-size: 0.88rem;">• Catalog</a>
                        <a href="academics-ugrd-milestones.html" style="font-weight: 500; color: #666; font-size: 0.88rem;">• Milestones</a>
                        <a href="academics-ugrd-courses.html" style="font-weight: 500; color: #666; font-size: 0.88rem;">• Courses</a>
                    </div>
                </div>
                <div class="sub-depth-group">
                    <span class="sub-depth-title" style="font-size: 0.9rem; color: var(--suny-navy); font-weight: bold; display: block; margin-bottom: 5px;">Graduate (GRD)</span>
                    <div class="sub-depth-links" style="padding-left: 15px; display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px;">
                        <a href="academics-grd-program.html" style="font-weight: 500; color: #666; font-size: 0.88rem;">• Program</a>
                        <a href="academics-grd-catalog.html" style="font-weight: 500; color: #666; font-size: 0.88rem;">• Catalog</a>
                        <a href="academics-grd-milestones.html" style="font-weight: 500; color: #666; font-size: 0.88rem;">• Milestones</a>
                        <a href="academics-grd-courses.html" style="font-weight: 500; color: #666; font-size: 0.88rem;">• Courses</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="menu-category">
            <h3 onclick="toggleAccordion(this)">COMMUNITY <span class="arrow">▼</span></h3>
            <ul class="drawer-sub-menu">
                <li><a href="community-news.html">Department News</a></li>
                <li><a href="community-announcements.html">Announcements</a></li>
            </ul>
        </div>

        <div class="menu-category">
            <h3 onclick="toggleAccordion(this)">USEFUL RESOURCES <span class="arrow">▼</span></h3>
            <ul class="drawer-sub-menu">
                <li><a href="resources-faq.html">FAQ</a></li>
                <li><a href="resources-forms.html">Forms & Documents</a></li>
            </ul>
        </div>

    </div>
`;

// 페이지 로드 시 menu-container 자리에 위 HTML을 자동으로 주입해주는 함수
document.addEventListener("DOMContentLoaded", function() {
    const menuContainer = document.getElementById("menu-container");
    if (menuContainer) {
        menuContainer.innerHTML = commonMenuHTML;
    }
});