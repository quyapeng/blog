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
        <p>主题</p>
        <button className="btn">connect me</button>
      </div>
      {/* <ul>
        <li>
          <a>blog</a>
        </li>
        <li>
          <a>兴趣爱好</a>
        </li>
        <li>
          <a>生活感悟</a>
        </li>
        <li>
          <a>关于自己</a>
        </li>
      </ul> */}
    </div>
  );
}
