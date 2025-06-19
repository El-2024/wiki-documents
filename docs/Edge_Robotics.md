---
description: This topic introduces Seeed Studio's Robotics product documentation.
title: Robotics
keywords:
- robotics
- nvidia
- ros
- isaac
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /robotics_page
last_update:
  date: 05/29/2025
  author: ZhuYaohui
---

# 🤖 Robotics 

> *"The science of today is the technology of tomorrow." - Edward Teller*

<div className="quick-nav-container">
  <nav className="quick-nav">
    <a href="#robot-kits" className="nav-item">
      <span className="icon">📦</span>
      <span className="text">Robot Kits</span>
      <div className="hover-effect"></div>
    </a>
    <a href="#actuators" className="nav-item">
      <span className="icon">⚙️</span>
      <span className="text">Joint Actuators</span>
      <div className="hover-effect"></div>
    </a>
    <a href="#sensors" className="nav-item">
      <span className="icon">👁️</span>
      <span className="text">Sensors</span>
      <div className="hover-effect"></div>
    </a>
    <a href="#software" className="nav-item">
      <span className="icon">💻</span>
      <span className="text">Software</span>
      <div className="hover-effect"></div>
    </a>
  </nav>
</div>


<div className="nav-grid">

## 📦 Robot Kits {#robot-kits}

<div class="category-group">
  <div class="category-card robot-kits">

## 🤗 Lerobot

<div className="card-container">
    <a href="/lerobot_so100m/" className="nav-item">
      <span className="text">SO100/101 Arm</span>
      <span className="tag stable">Update</span>
    </a>
    <a href="/lerobot_so100m_isaacsim/" className="nav-item">
      <span className="text">SO100 Arm with IsaacSim</span>
    </a>
    <a href="(/lerobot_lekiwi/" className="nav-item">
      <span className="text">Lekiwi Mobile Base</span>
       <span className="tag recommended">New</span>
    </a>
</div>

</div>
</div>

## ⚙️ Actuators {#actuators}
<div class="category-group">
<div className="category-card actuators">

<div className="card-container">
    <a href="/myactuator_series/" className="nav-item">
      <span className="text">MyActuator X Series</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/damiao_series/" className="nav-item">
      <span className="text">Damiao DM43 Series</span>
      <span className="tag recommended">New</span>
    </a>
</div>

</div>
</div>

## 👁️ Sensors {#sensors}
<div class="category-group">
<div className="category-card sensors">

**LiDAR**  

<div className="card-container">
    <a href="/robosense_lidar/" className="nav-item">
      <span className="text">Robosense</span>
    </a>
    <a href="/mid360/" className="nav-item">
      <span className="text">MID360</span>
    </a>
    <a href="/a_loam/" className="nav-item">
      <span className="text">A-LOAM Algorithm</span>
    </a>
    <a href="/slamtec/" className="nav-item">
      <span className="text">Slamtec Series</span>
       <span className="tag recommended">New</span>
    </a>
</div>


**Camera**  

<div className="card-container">
    <a href="/orbbec_depth_camera_on_ros/" className="nav-item">
      <span className="text">Orbbec Depth Camera</span>
    </a>
    <a href="/csi_camera_on_ros/" className="nav-item">
      <span className="text">CSI Camera</span>
    </a>
</div>

**Voice**  

<div className="card-container">
    <a href="/ReSpeaker_Core_v2.0/" className="nav-item">
      <span className="text">ReSpeaker Core v2.0</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/ReSpeaker_Mic_Array_v2.0/" className="nav-item">
      <span className="text">ReSpeaker Mic Array v2.0</span>
      <span className="tag recommended">New</span>
    </a>
</div>

**IMU**  

<div className="card-container">
    <a href="/hexfellow_y200/" className="nav-item">
      <span className="text">HEXFELLOW Y200</span>
      <span className="tag recommended">New</span>
    </a>
</div>


</div>
</div>

## 💻 Software {#software}
<div class="category-group">
<div className="category-card software">

**ROS Ecosystem**  

<div className="card-container">
    <a href="/installing_ros1/" className="nav-item">
      <span className="text">ROS1 Installation</span>
    </a>
    <a href="/install_ros2_humble/" className="nav-item">
      <span className="text">ROS2 Installation</span>
    </a>
    <a href="/install_isaacros/" className="nav-item">
      <span className="text">IsaacROS Installation</span>
    </a>
    <a href="/isaac_ros_apriltag/" className="nav-item">
      <span className="text">AprilTag</span>
    </a>
    <a href="/isaac_ros_visual_slam/" className="nav-item">
      <span className="text">Visual SLAM</span>
    </a>
</div>



**NVIDIA Isaac**  
<div className="card-container">
<a href="/install_isaaclab/" className="nav-item">
  <span className="text">Isaac Lab Installation</span>
</a>
</div>


**VLA**  
<div className="card-container">
<a href="/control_robotic_arm_via_gr00t" className="nav-item">
  <span className="text">NVIDIA's GR00T</span>
</a>
</div>


</div>
</div>

</div>




<style>{`
/* 导航容器 */
.quick-nav-container {
  margin: 2rem 0;
  padding: 1rem;
  background: 
  radial-gradient(at 10% 20%, #f0fdf4 0%, transparent 50%),
  radial-gradient(at 90% 80%, #f0f7ff 0%, transparent 50%),
  white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

/* Dark模式 - 导航容器 */
html[data-theme='dark'] .quick-nav-container {
  background: 
    radial-gradient(at 10% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
    radial-gradient(at 90% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
    linear-gradient(135deg, #1f2937 0%, #111827 100%);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.3),
    inset 0 0 12px rgba(99, 102, 241, 0.1); /* 内发光增强深度 */
}

/* 导航主体 */
.quick-nav {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

/* 导航项 */
.nav-item {
  position: relative;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none !important;
  color: #333;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  z-index: 1;
}

/* Dark模式 - 导航项 */
html[data-theme='dark'] .nav-item {
  color: #e5e7eb;
  background: #374151;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* 图标样式 */
.nav-item .icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s;
}

/* 文字样式 */
.nav-item .text {
  font-size: 0.95rem;
  white-space: nowrap;
}

/* 悬浮特效 */
.nav-item .hover-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
  border-radius: 12px;
  transition: height 0.3s ease;
  z-index: -1;
}

/* 悬浮动画 */
.nav-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  color: white;
}

/* Dark模式 - 悬浮动画 */
html[data-theme='dark'] .nav-item:hover {
  box-shadow: 0 6px 12px rgba(0,0,0,0.6);
  color: white;
}

.nav-item:hover .icon {
  transform: scale(1.2) rotate(10deg);
}

.nav-item:hover .hover-effect {
  height: 100%;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .quick-nav {
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-item {
    flex-direction: row;
    justify-content: start;
    padding: 0.8rem 1rem;
  }
  .nav-item .icon {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }
}
`}</style>


<style>{`
/* 内容卡片增强版样式 */
.nav-grid {
  display: block;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
}

.category-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 1;
}

/* Dark模式 - 内容卡片 */
html[data-theme='dark'] .category-card {
  background: #374151;
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);
  color: #e5e7eb;
}

.category-group {
  margin-bottom: 2rem;
}

/* 分类色标 */
.category-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
}

.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* 悬浮特效 */
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark模式 - 悬浮特效 */
html[data-theme='dark'] .category-card:hover {
  box-shadow: 0 12px 20px rgba(0,0,0,0.6);
}

.category-card:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: -1;
}

/* Dark模式 - 悬浮光效 */
html[data-theme='dark'] .category-card:hover::after {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* 链接动画 */
.category-card a {
  position: relative;
  display: inline-block;
  transition: all 0.2s;
  text-decoration: none !important;
  color: #333;
}

/* Dark模式 - 链接 */
html[data-theme='dark'] .category-card a {
  color: #d1d5db;
}

.category-card a:hover {
  color: #4a90e2;
  transform: translateX(5px);
}

/* Dark模式 - 链接悬浮 */
html[data-theme='dark'] .category-card a:hover {
  color: #60a5fa;
}

.category-card a::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4a90e2;
  transition: width 0.3s;
}

/* Dark模式 - 链接下划线 */
html[data-theme='dark'] .category-card a::after {
  background: #60a5fa;
}

.category-card a:hover::after {
  width: 100%;
}

.card-container {
  margin-bottom: 1.5rem; /* 原为0.1rem */
}

/* 标签样式增强 */
.tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  transition: all 0.3s;
}

.stable { 
  background: #e6f4ea; 
  color: #137333;
  box-shadow: 0 2px 4px rgba(0,100,0,0.1);
}

/* Dark模式 - Stable标签 */
html[data-theme='dark'] .stable {
  background: #065f46;
  color: #a7f3d0;
  box-shadow: 0 2px 4px rgba(0,100,0,0.3);
}

.recommended { 
  background: #fce8e6; 
  color: #a50e0e;
  box-shadow: 0 2px 4px rgba(200,0,0,0.1);
}

/* Dark模式 - Recommended标签 */
html[data-theme='dark'] .recommended {
  background: #7f1d1d;
  color: #fca5a5;
  box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark模式 - 点击效果 */
html[data-theme='dark'] .category-card:active {
  box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
  }
  
  .category-card {
    width: 100%;
    margin-top: 0.5rem; /* 卡片紧贴标题 */
  }
}

/* Dark模式 - 标题文字 */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
  color: #f9fafb;
}

/* Dark模式 - 正文文字 */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
  color: #e5e7eb;
}

/* Dark模式 - 引用块 */
html[data-theme='dark'] blockquote {
  color: #9ca3af;
  border-left-color: #4b5563;
}
`}</style>