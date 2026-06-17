const pastelColors = [
    "#ffb5c6", "#ffd0b1", "#fff280", "#C8E6C9", 
    "#B3E5FC", "#E1BEE7", "#CFD8DC", "#FFE0B2", 
    "#D1C4E9", "#B2DFDB", "#D7CCC8", "#C5CAE9"
];

// نختار جميع الصناديق
let boxes = document.querySelectorAll("div.box");

boxes.forEach((box, index) => {
    // تحديد اللون الحالي للبطاقة
    let color = pastelColors[index % pastelColors.length];
    
    // 1. تطبيق اللون على الـ border-bottom
    box.style.borderBottom = `8px solid ${color}`;
    
    // 2. البحث عن جميع الأيقونات داخل هذه البطاقة وتلوينها
    let icons = box.querySelectorAll("i");
    icons.forEach(icon => {
        icon.style.color = color;
    });
});