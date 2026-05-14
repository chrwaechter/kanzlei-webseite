interface GoogleMapsProps {
  height?: number;
}

export default function GoogleMaps({ height = 300 }: GoogleMapsProps) {
  return (
    <div style={{ height, width: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22136.052420708464!2d11.540727668799486!3d48.1395507076704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f81b5d68bb%3A0x1284da62c8dadb88!2sChristian%20W%C3%A4chter!5e0!3m2!1sde!2sde!4v1778721583651!5m2!1sde!2sde"
        title="Kanzlei Wächter auf Google Maps"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}