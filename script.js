// つなポン 紹介ページ
// 言語切替 (ja / en) ／ scroll ヘッダ ／ fade-in ／ ripple ／ parallax
// （パズルちゃんの紹介ページ script.js と同じ作り）
//
// 文言はアプリの訳文（tsunapon/ja.lproj・en.lproj）と呼び名をそろえてある。

const translations = {
  ja: {
    page_title: "つなポン - 同じ色か同じ数字をつないで、ポン！",
    meta_description: "つなポンは、同じ色か同じ数字の玉を指でなぞってつなげて消す iPhone 向けのパズルゲームです。CPU対戦・フリープレイ・ミッションの3つのモードで遊べます。ログインは不要で、記録は端末の中に残ります。",
    app_name: "つなポン",
    nav_howto: "遊び方",
    nav_modes: "モード",
    nav_features: "機能",
    nav_download: "ダウンロード",
    nav_privacy: "プライバシー",
    nav_contact: "お問い合わせ",
    hero_tagline: "同じ色か同じ数字をつないで、ポン！",
    hero_description: "となりあう玉を指でなぞって、3個以上つなげると消えるパズルです。色と数字を切りかえながら長くつなぐほど、点数は大きくなります。CPUとの点数勝負、終わりのないフリープレイ、お題に挑むミッションで遊べます。",
    hero_cta_download: "ダウンロード",
    hero_cta_howto: "遊び方を見る",
    howto_title: "遊び方",
    howto_lead: "ルールはかんたん。同じ色か同じ数字の玉を、指でなぞってつなげるだけです。",
    step1_title: "なぞって消す",
    step1_text: "となりあう玉を3個以上つなげると消えます。ななめもOK。指をもどすと、ひとつ前までなぞり直せます。",
    step2_title: "色でも、数字でも",
    step2_text: "つなげられるのは同じ色どうしか、同じ数字どうし。色だけより数字だけ、数字だけより両方をまぜたほうが、1個あたりの点が高くなります。",
    step3_badge: "いちばん点が入る！",
    step3_title: "ミックスバースト",
    step3_text: "色と数字を2回以上切りかえながら5個以上つなぐと発動。なぞった玉のまわりもまとめて消えて、大きく点が入ります。",
    bursts_title: "役（バースト）",
    burst_mix_title: "ミックスバースト",
    burst_mix_text: "色と数字を2回以上切りかえて5個以上。なぞった玉の上下左右も消える。",
    burst_double_title: "ダブルバースト",
    burst_double_text: "色も数字も全部同じで5個以上。その色とその数字が全部消える。",
    burst_color_title: "カラーバースト",
    burst_color_text: "全部同じ色で5個以上。盤面のその色が全部消える。",
    burst_number_title: "ナンバーバースト",
    burst_number_text: "全部同じ数字で5個以上。盤面のその数字が全部消える。",
    modes_title: "3つのモード",
    mode_cpu_title: "CPU対戦",
    mode_cpu_text: "CPUと同時に自分の盤面を消していき、先に15,000点に届くか、120秒たったときに点数が多いほうの勝ち。役を出すと相手の盤面に「石」を送れます。勝つと次のレベルがひらきます。",
    mode_free_title: "フリープレイ",
    mode_free_text: "ひとりでベストスコアを目指すモード。時間も手数も気にしない「おまかせ」、60秒の「タイムアタック」、20手の「手数チャレンジ」から選べます。",
    mode_mission_title: "ミッション",
    mode_mission_text: "「赤い玉を15個消す」「ミックスバーストを1回」などのお題を、決められた手数の中でクリア。少ない手数でクリアするほど★が増えます（最大★3）。",
    features_title: "主な機能",
    feature_fever_title: "フィーバー",
    feature_fever_text: "なぞるほどゲージがたまり、満タンで12秒間のフィーバー。盤面が2色だけになって、長くつなぐチャンスです。",
    feature_rock_title: "石の送り合い",
    feature_rock_text: "CPU対戦では、役を出すと相手の盤面に石が落ちます。向かってくる石は、こちらも役を出せば相殺できます。",
    feature_chars_title: "個性ゆたかなCPU",
    feature_chars_text: "のんびり屋のころんから、最強のキングポンまで。Lv.10に勝つと、さらに強いカスタムレベル（Lv.11〜30）に挑めます。",
    feature_shop_title: "見た目を着せかえ",
    feature_shop_text: "遊んで集めたコインで、テーマカラー・玉のデザイン・フォント・フィーバー中の消える音などを手に入れられます。",
    feature_login_title: "ログインボーナス",
    feature_login_text: "毎日ひらくとコインがもらえます。7日続けると、いちばん多くもらえます。プレイでも1,000点ごとに1枚もらえます。",
    feature_record_title: "記録と実績",
    feature_record_text: "消した玉の数、最長つなぎ、1手の最高点、役を出した回数などが残ります。条件を満たすと実績が解除されます。",
    feature_hint_title: "なぞりやすい候補表示",
    feature_hint_text: "なぞっている間、次につなげられる玉を光らせて教えてくれます。出し方は設定で選べます。",
    feature_icloud_title: "iCloud に預けられる",
    feature_icloud_text: "記録・コイン・手に入れたものを iCloud に置いておけば、機種を変えても続きから遊べます。使うかどうかは選べます。",
    feature_privacy_title: "ログインはいりません",
    feature_privacy_text: "アカウントも登録もありません。日本語と英語に対応しています。",
    download_title: "ダウンロード",
    download_heading: "App Store で今すぐダウンロード",
    download_subheading: "iOS 17.0 以降の iPhone に対応しています。",
    download_button: "App Store でダウンロード",
    download_requirements_title: "システム要件",
    download_requirements_ios: "iOS 17.0 以降",
    download_requirements_devices: "iPhone／縦向き",
    download_requirements_language: "日本語・英語",
    download_requirements_price: "無料ダウンロード",
    download_requirements_iap: "App内課金・広告なし",
    privacy_title: "プライバシーポリシー",
    privacy_handling_heading: "個人情報の取り扱いについて",
    privacy_handling_text: "つなポン（以下「本アプリ」）は、利用者のプライバシーを尊重し、個人情報の保護に努めます。本アプリはアカウント登録を必要とせず、開発者のサーバーを持ちません。",
    privacy_collect_heading: "収集する情報",
    privacy_collect_text: "本アプリが扱うのは、遊んだ記録（消した玉の数・最高点・役を出した回数・CPU対戦の勝ち数・遊んだ時間など）、解除した実績、ミッションの★、ログインボーナスの受け取り状況、コインとショップで手に入れたもの、および各種設定だけで、これらはすべて端末の中に留まります。氏名・メールアドレス・位置情報は収集しません。利用状況の解析（アナリティクス）も行いません。",
    privacy_storage_heading: "情報の保存",
    privacy_storage_text: "遊んだ記録と設定は、端末内（UserDefaults）に保存されます。",
    privacy_icloud_heading: "iCloud について",
    privacy_icloud_text: "設定で iCloud バックアップを有効にした場合に限り、遊んだ記録・実績・ミッションの★・コイン・ショップで手に入れたものが iCloud のキーバリューストアに保存され、同じ Apple アカウントの端末間で同期されます。この同期は Apple の iCloud 上で完結し、開発者がその内容を参照することはできません。設定は同期されず、その端末にだけ残ります。",
    privacy_network_heading: "外部との通信",
    privacy_network_text: "本アプリは、開発者のサーバーへ利用者の記録を送信しません。広告も表示しません。ネットワークを使うのは、利用者が iCloud バックアップを有効にした場合の Apple のサービスとの通信だけです。",
    privacy_coin_heading: "コインについて",
    privacy_coin_text: "アプリ内のコインは、ログインボーナスとプレイで手に入るものです。お金で買うことはできず、App内課金はありません。",
    privacy_delete_heading: "データの削除",
    privacy_delete_text: "アプリを削除すると、端末内に保存された記録と設定も一緒に削除されます。iCloud バックアップを使っている場合は、iOS の設定から iCloud 上のデータを削除できます。",
    privacy_children_heading: "お子さまの利用について",
    privacy_children_text: "本アプリは年齢を問わず利用できます。開発者は個人情報を収集せず、広告とアプリ内購入もありません。",
    privacy_contact_heading: "お問い合わせ",
    privacy_contact_text_before: "プライバシーポリシーに関するご質問は、",
    privacy_contact_link: "お問い合わせ",
    privacy_contact_text_after: "までご連絡ください。",
    privacy_update: "最終更新: 2026 年 10 月",
    contact_title: "お問い合わせ",
    contact_intro: "アプリに関するご質問、バグ報告、機能要望などがございましたら、お気軽にお問い合わせください。",
    contact_email_heading: "📧 メール",
    contact_bug_heading: "🐛 バグ報告",
    contact_bug_text: "うまく消えない、表示がおかしいなどの不具合を見つけたら、上記メールアドレスまで詳細をお送りください。",
    contact_feature_heading: "💡 機能要望",
    contact_feature_text: "こんなモードやお題がほしい、といったご要望もお待ちしています。",
    footer_copyright: "© 2026 つなポン. All rights reserved.",
  },
  en: {
    page_title: "Pop Link - Link the same color or number, and pop!",
    meta_description: "Pop Link is an iPhone puzzle game where you trace across balls of the same color or number to link and clear them. Play in three modes: VS CPU, Free Play and Missions. No sign-in needed, and your records stay on your device.",
    app_name: "Pop Link",
    nav_howto: "How to Play",
    nav_modes: "Modes",
    nav_features: "Features",
    nav_download: "Download",
    nav_privacy: "Privacy",
    nav_contact: "Contact",
    hero_tagline: "Link the same color or number, and pop!",
    hero_description: "Trace across neighboring balls and link 3 or more to clear them. The longer you link while switching between color and number, the bigger your score. Race a CPU for points, play endlessly in Free Play, or take on goals in Missions.",
    hero_cta_download: "Download",
    hero_cta_howto: "How to Play",
    howto_title: "How to Play",
    howto_lead: "The rules are simple. Just trace across balls of the same color or the same number to link them.",
    step1_title: "Trace to Clear",
    step1_text: "Link 3 or more neighboring balls to clear them. Diagonals are OK too. Move your finger back to undo the last step.",
    step2_title: "By Color or by Number",
    step2_text: "You can link balls of the same color or the same number. Number-only links score more per ball than color-only, and mixing both scores the most.",
    step3_badge: "BIGGEST SCORE!",
    step3_title: "Mix Burst",
    step3_text: "Link 5+ balls while switching between color and number 2+ times. The balls around your trace clear too, for a big score.",
    bursts_title: "Bursts",
    burst_mix_title: "Mix Burst",
    burst_mix_text: "5+ balls, switching color and number 2+ times. Also clears the balls above, below and beside.",
    burst_double_title: "Double Burst",
    burst_double_text: "5+ balls, all the same color and number. Clears that whole color and number.",
    burst_color_title: "Color Burst",
    burst_color_text: "5+ balls, all the same color. Clears that color from the board.",
    burst_number_title: "Number Burst",
    burst_number_text: "5+ balls, all the same number. Clears that number from the board.",
    modes_title: "Three Modes",
    mode_cpu_title: "VS CPU",
    mode_cpu_text: "You and the CPU clear your own boards at the same time. First to 15,000 points, or the higher score after 120 seconds, wins. Bursts send \"rocks\" to the CPU's board. Win to unlock the next level.",
    mode_free_title: "Free Play",
    mode_free_text: "Go for your best score on your own. Choose from Endless (no timer, no move limit), Time Attack (60 seconds) or Move Challenge (20 moves).",
    mode_mission_title: "Missions",
    mode_mission_text: "Clear goals like \"Clear 15 red balls\" or \"Make 1 Mix Burst\" within a move limit. The fewer moves you use, the more ★ you earn (up to ★3).",
    features_title: "Features",
    feature_fever_title: "Fever",
    feature_fever_text: "Tracing fills the gauge, and a full gauge gives you 12 seconds of Fever. The board turns just 2 colors — your chance for long links.",
    feature_rock_title: "Rock Battles",
    feature_rock_text: "In VS CPU, bursts drop rocks onto the rival's board. Make a burst of your own to cancel rocks headed your way.",
    feature_chars_title: "Colorful CPUs",
    feature_chars_text: "From sleepy Koron to the mighty King Pon. Beat Lv.10 to take on even tougher custom levels (Lv.11–30).",
    feature_shop_title: "Dress It Up",
    feature_shop_text: "Use the coins you earn to unlock theme colors, ball designs, fonts, Fever clear sounds and more.",
    feature_login_title: "Login Bonus",
    feature_login_text: "Get coins every day you open the app. Keep it up for 7 days for the biggest reward. You also earn 1 coin for every 1,000 points.",
    feature_record_title: "Records & Achievements",
    feature_record_text: "Track balls cleared, your longest link, best move, bursts made and more. Meet the conditions to unlock achievements.",
    feature_hint_title: "Tracing Hints",
    feature_hint_text: "While you trace, the balls you can link next light up. Choose the hint style in Settings.",
    feature_icloud_title: "Back Up to iCloud",
    feature_icloud_text: "Keep your records, coins and unlocks in iCloud, and pick up where you left off on a new phone. It's up to you whether to use it.",
    feature_privacy_title: "No Sign-in Needed",
    feature_privacy_text: "No account, no registration. Available in Japanese and English.",
    download_title: "Download",
    download_heading: "Download on the App Store",
    download_subheading: "Works on iPhone with iOS 17.0 or later.",
    download_button: "Download on the App Store",
    download_requirements_title: "System Requirements",
    download_requirements_ios: "iOS 17.0 or later",
    download_requirements_devices: "iPhone / portrait",
    download_requirements_language: "Japanese, English",
    download_requirements_price: "Free download",
    download_requirements_iap: "No in-app purchases or ads",
    privacy_title: "Privacy Policy",
    privacy_handling_heading: "How We Handle Personal Information",
    privacy_handling_text: "Pop Link (\"the App\") respects your privacy and strives to protect your personal information. The App requires no account, and the developer operates no servers.",
    privacy_collect_heading: "Information Collected",
    privacy_collect_text: "The App only handles your play records (balls cleared, best scores, bursts made, VS CPU wins, play time, etc.), unlocked achievements, mission stars, login bonus status, coins and Shop unlocks, and your settings. All of this stays on your device. We do not collect your name, email address or location, and we do not perform usage analytics.",
    privacy_storage_heading: "Data Storage",
    privacy_storage_text: "Your play records and settings are stored on your device (UserDefaults).",
    privacy_icloud_heading: "About iCloud",
    privacy_icloud_text: "Only if you turn on iCloud Backup in Settings, your play records, achievements, mission stars, coins and Shop unlocks are stored in iCloud's key-value storage and synced across devices signed in with the same Apple Account. This sync happens entirely within Apple's iCloud, and the developer cannot see its contents. Settings are not synced and stay on each device.",
    privacy_network_heading: "Network Communication",
    privacy_network_text: "The App does not send your records to the developer's servers, and it shows no ads. The only network use is communication with Apple's services when you turn on iCloud Backup.",
    privacy_coin_heading: "About Coins",
    privacy_coin_text: "In-app coins are earned from the login bonus and by playing. They cannot be bought with money, and there are no in-app purchases.",
    privacy_delete_heading: "Deleting Data",
    privacy_delete_text: "Deleting the App also deletes the records and settings stored on your device. If you use iCloud Backup, you can delete the data in iCloud from the iOS Settings app.",
    privacy_children_heading: "Use by Children",
    privacy_children_text: "The App can be used by people of all ages. The developer collects no personal information, and the App has no ads or in-app purchases.",
    privacy_contact_heading: "Contact",
    privacy_contact_text_before: "For questions about this Privacy Policy, please ",
    privacy_contact_link: "contact us",
    privacy_contact_text_after: ".",
    privacy_update: "Last updated: October 2026",
    contact_title: "Contact",
    contact_intro: "If you have questions about the app, bug reports or feature requests, feel free to get in touch.",
    contact_email_heading: "📧 Email",
    contact_bug_heading: "🐛 Bug Reports",
    contact_bug_text: "If you find a bug, such as balls not clearing correctly or something displaying wrong, please send the details to the email address above.",
    contact_feature_heading: "💡 Feature Requests",
    contact_feature_text: "We'd also love to hear ideas for new modes or missions.",
    footer_copyright: "© 2026 Pop Link. All rights reserved.",
  },
};

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("lang")) return params.get("lang");
  const stored = localStorage.getItem("lang");
  if (stored) return stored;
  const browser = navigator.language || navigator.userLanguage || "ja";
  return browser.startsWith("ja") ? "ja" : "en";
}

function applyLanguage(lang) {
  const t = translations[lang] || translations["ja"];

  document.title = t["page_title"] || document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t["meta_description"] || "");

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    const key = el.getAttribute("data-i18n-key");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((img) => {
    const key = img.getAttribute("data-i18n-alt");
    if (t[key] !== undefined) img.alt = t[key];
  });

  document.querySelectorAll("img[data-src-ja]").forEach((img) => {
    const src = lang === "ja" ? img.dataset.srcJa : img.dataset.srcEn;
    if (src) img.src = src;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}

// ── Scroll & Header ───────────────────────────────────────────────────────────

function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
      lastScrollY = currentScrollY;
    },
    { passive: true },
  );

  header.style.transition = "transform 0.3s ease";
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.querySelector(".header")?.offsetHeight ?? 70;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ── Intersection Observer (fade-in) ──────────────────────────────────────────

function initFadeIn() {
  const targets = document.querySelectorAll(
    ".step-card, .burst-card, .mode-card, .feature-card, .download-info, .download-requirements, .privacy-content, .contact-method",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  // 最初から見えている範囲は隠さない。
  // 隠してしまうと、監視が働かない場面（プレビュー、拡張機能、古い環境）で
  // 画面の先頭から真っ白になってしまう。
  targets.forEach((el) => {
    if (el.getBoundingClientRect().top <= window.innerHeight) return;
    el.style.opacity = "0";
    observer.observe(el);
  });

  document.addEventListener("animationstart", (e) => {
    if (e.animationName === "fadeInUp") {
      e.target.style.opacity = "";
    }
  });

  // 保険。何らかの理由で監視が働かなくても、必ず見える状態に戻す
  setTimeout(() => {
    targets.forEach((el) => {
      if (el.style.opacity === "0") el.style.opacity = "";
    });
  }, 4000);
}

// ── Ripple on buttons ─────────────────────────────────────────────────────────

function initRipple() {
  document.querySelectorAll(".btn, .app-store-placeholder").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
        background:rgba(255,255,255,0.35);border-radius:50%;
        transform:scale(0);animation:ripple 0.5s linear;pointer-events:none;
      `;
      btn.style.position = "relative";
      btn.style.overflow = "hidden";
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });

  const style = document.createElement("style");
  style.textContent = `@keyframes ripple{to{transform:scale(2.5);opacity:0}}`;
  document.head.appendChild(style);
}

// ── Lazy images ───────────────────────────────────────────────────────────────

function initLazyImages() {
  const images = document.querySelectorAll("img.lazy");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });
    images.forEach((img) => observer.observe(img));
  }
}

// ── Parallax (hero) ───────────────────────────────────────────────────────────

function initParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  window.addEventListener(
    "scroll",
    () => {
      const offset = window.scrollY * 0.3;
      hero.style.backgroundPositionY = `${offset}px`;
    },
    { passive: true },
  );
}

// ── Init ──────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const lang = detectLanguage();
  applyLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  initHeader();
  initSmoothScroll();
  initFadeIn();
  initRipple();
  initLazyImages();
  initParallax();
});
