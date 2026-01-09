import './Map.css';

interface MapProps {
  /**
   * 地图嵌入URL
   * Google Maps: 在Google Maps中搜索地址 -> 点击"分享" -> 选择"嵌入地图" -> 复制iframe的src属性
   * 百度地图: 在百度地图中搜索地址 -> 点击"分享" -> 选择"嵌入代码" -> 复制iframe的src属性
   * 示例: "https://www.google.com/maps/embed?pb=..."
   */
  embedUrl?: string;
  /**
   * 地址文本（仅用于显示，不用于生成地图）
   */
  address?: string;
  /**
   * 地图标题
   */
  title?: string;
}

const Map = ({ embedUrl, address, title = '联系我们' }: MapProps) => {
  // 获取地图URL
  const getMapUrl = () => {
    if (embedUrl) {
      return embedUrl;
    }
    // 如果没有提供embedUrl，返回一个占位符
    // 请替换为实际的Google Maps或百度地图嵌入URL
    return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576!2d-73.98811768459418!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus';
  };

  return (
    <section className="map-section" id="location">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">欢迎到访我们的办公室</p>
        </div>
        
        <div className="map-wrapper">
          <iframe
            src={getMapUrl()}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            className="map-iframe"
          />
        </div>

        {address && (
          <div className="map-address">
            <p>📍 {address}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Map;

