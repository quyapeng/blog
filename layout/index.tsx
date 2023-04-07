export default function Layout() {
  return (
    <div className="nav">
      <div className="left">
        <img src="/images/avatar.png" />
        <div className="info">
          <h4>mia Qu</h4>
          <h5>a developer</h5>
          <p>happy，fight，freedom。</p>
        </div>
      </div>
      <div className="nav-list">
        <li>index</li>
        <li>blog</li>
        <li>about</li>
        <li>connect</li>
      </div>
      <div className="right">
        <p>theme</p>
        <button className="btn">connect me</button>
      </div>
    </div>
  );
}
