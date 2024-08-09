import React, { useEffect } from "react";
import "./clockWidget.css";

const NewClock = () => {
  useEffect(() => {
    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
      const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
      };
    };

    const describeArc = (x, y, radius, startAngle, endAngle) => {
      const start = polarToCartesian(x, y, radius, endAngle);
      const end = polarToCartesian(x, y, radius, startAngle);
      const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
      return [
        "M", start.x, start.y,
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y
      ].join(" ");
    };

    const setCaptions = () => {
      const now = new Date();
      const hour = now.getHours() % 12;
      const minute = now.getMinutes();
      const hourArc = ((hour * 60 + minute) / (12 * 60)) * 360;
      const minArc = (minute / 60) * 360;

      document.querySelector(".clockArc.hour").setAttribute("d", describeArc(200, 125, 60, 0, hourArc));
      document.querySelector(".clockArc.minute").setAttribute("d", describeArc(200, 125, 75, 0, minArc));
      
      const dotHour = document.querySelector(".clockDot.hour");
      let pos = polarToCartesian(200, 125, 60, hourArc);
      dotHour.setAttribute("cx", pos.x);
      dotHour.setAttribute("cy", pos.y);

      const dotMinute = document.querySelector(".clockDot.minute");
      pos = polarToCartesian(200, 125, 75, minArc);
      dotMinute.setAttribute("cx", pos.x);
      dotMinute.setAttribute("cy", pos.y);

      document.getElementById("time").textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    document.getElementById("day").textContent = new Date().toLocaleDateString([], { weekday: 'long' });
    document.getElementById("date").textContent = new Date().toLocaleDateString([], { month: 'long', day: 'numeric' });

    setCaptions();
    setInterval(() => setCaptions(), 10000);
  }, []);

  return (
    <svg width="400" height="250" viewBox="0 0 400 250">
      <defs>
        <pattern id="dotPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle className="bgDot" cx="4" cy="4" r="1.5" />
        </pattern>
        <radialGradient id="backHoleBelowClock" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="50%" style={{ stopColor: "rgb(0,0,0)", stopOpacity: 0.7 }} />
          <stop offset="100%" style={{ stopColor: "rgb(0,0,0)", stopOpacity: 0 }} />
        </radialGradient>
        <radialGradient id="blackVignette" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="40%" style={{ stopColor: "rgb(0,0,0)", stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: "rgb(0,0,0)", stopOpacity: 1 }} />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="shadow" />
          <feOffset dx="1" dy="1" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" style={{ stroke: "#000000", fill: "url(#dotPattern)" }} />
      <ellipse cx="200" cy="125" rx="120" ry="120" fill="url(#backHoleBelowClock)" />
      <ellipse cx="200" cy="125" rx="160" ry="160" fill="url(#blackVignette)" />
      <circle className="clockCircle hour" cx="200" cy="125" r="60" strokeWidth="4" />
      <path className="clockArc hour" strokeWidth="4" strokeLinecap="round" stroke="#1bbccb" filter="url(#glow)" />
      <circle className="clockDot hour" r="5" filter="url(#glow)" />
      <circle className="clockCircle minute" cx="200" cy="125" r="75" strokeWidth="2" />
      <path className="clockArc minute" strokeWidth="2" strokeLinecap="round" stroke="#1bbccb" filter="url(#glow)" />
      <circle className="clockDot minute" r="4" filter="url(#glow)" />
      <text id="time" className="caption timeText" x="200" y="125" textAnchor="middle" alignmentBaseline="middle" filter="url(#shadow)" />
      <text id="day" className="caption dayText" x="140" y="100" textAnchor="end" alignmentBaseline="middle" filter="url(#shadow)" />
      <text id="date" className="caption dateText" x="140" y="130" textAnchor="end" alignmentBaseline="middle" filter="url(#shadow)" />
    </svg>
  );
};

export default NewClock;
