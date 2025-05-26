// import { Link } from 'react-router-dom';
import "../style/Main.scss"
import FadeInSection from '../Components/FadeInSection';

// import img from '../img';

function Member_page () {
    const images = require.context('../img/member', false, /\.(png|jpe?g|svg)$/);

    const imageList = images.keys().map((path, indx) => (
    <img className="img img_member" key={indx} src={images(path)} />
    ));
    return (
        <>
            <p>ここはメンバーごとのページ</p>
            <div className="float_question">
                <p>Q : {questions_data.q3}</p>
            </div>
                {/* .filterで自分のみ除外する */}
                {userData.filter(userData => userData.id !== 3).map(({id, name, company, url, birthday, answers}, index) => (
                    <div className="member_grid">
                        <FadeInSection key={name}>
                            <div className='member_profile'>
                                {imageList[index]}
                                <p className="member_profile_p">名前：<br/>{name}</p>
                                <span className="member_profile_p">所属企業：<br/><a className="to-top-link" href={company_url[url]}>{company}</a></span>
                                <p className="member_profile_p">生年月日：<br/>{birthday}</p>
                                <p>A. {answers.q3}</p>
                                {/* <div className='border_item'></div> */}
                            </div>
                        </FadeInSection>
                    </div>
                ))}
        </>
    )
} export default Member_page;

export const userData = [
{ id: 1, name: 'カドカアシス', company: '日本ITビズネスカレッジ', url: "c_biz", birthday: '1999年09月02日', answers: { q1: "スイス", q2: "特にありません。", q3: "ブラッククローバ", q4: "母国の料理もも", q5: "そん ごくう(goku)", q6: "パンダ", q7: "once i was 7 years old", q8: "家族に会いに行きたい", q9: "", q10: "アニメをみること", q11: "友達とお酒をのみたい", q12: "きものです", q13: "ゼニガメ"}},
{ id: 2, name: '飯塚愛菜', company: 'きらぼしシステム', url: "c_kira", birthday: '2002年06月09日', answers: { q1: "マルタ", q2: "-", q3: "ライ麦畑でつかまえて", q4: "うな重", q5: "パン屋さん", q6: "リス", q7: "KingGnu「Tokyo Rendez-Vous」", q8: "国内旅行", q9: "イマノフルーツファクトリー茅場町本店", q10: "お散歩、競馬", q11: "いろんな人と思い出話をする", q12: "祝日が多い", q13: "フライゴン(色違いが好きです)"}},
{ id: 3, name: '江原裕基', company: 'シードライブ', url: "c_cdr", birthday: '2001年04月19日', answers: { q1: "イギリス", q2: "バナナ！！", q3: "ー", q4: "お寿司です", q5: "イラストレーター", q6: "たぬき", q7: "愛情と矛先（Mrs. Green Apple）", q8: "国内旅行", q9: "バンコック　ポニー食堂（行ったことないけど美味しそう！）", q10: "演劇（演じるのも観るのも）、イラストを描くこと、読書", q11: "ゆっくり家族と過ごす", q12: "寿司", q13: "ギラティナ"}},
{ id: 4, name: '菅悠一郎', company: 'khronos', url: "c_khro", birthday: '1996年09月06日', answers: { q1: "イタリア", q2: "魚のすり身", q3: "貴志祐介『新世界より』", q4: "-", q5: "宇宙開発従事者", q6: "ロシアンブルー(猫)", q7: "ヨルシカ「雨とカプチーノ」", q8: "旅行と勉強", q9: "もんじゃ麦", q10: "読書", q11: "縁を辿る", q12: "侘び寂び", q13: "イーブイ"}},
{ id: 5, name: '熊谷一希', company: 'khronos', url: "c_khro", birthday: '2003年02月02日', answers: { q1: "ブラジル", q2: "ピーマン", q3: "イニシャルｄ", q4: "ミラノ風ドリア(サイゼ）", q5: "電車の運転士", q6: "カメ", q7: "", q8: "旅行", q9: "トゥットベーネ　ピッツァの店", q10: "音楽を聴くこと", q11: "友達に合う", q12: "和食", q13: "ダークライ"}},
{ id: 6, name: '嶋田萌花', company: 'きらぼしシステム', url: "c_kira", birthday: '2003年03月12日', answers: { q1: "アメリカ", q2: "里芋", q3: "森見登美彦『恋文の技術』", q4: "うなぎ", q5: "かき氷屋さん", q6: "うさぎ", q7: "JUNG KOOK「Seven」", q8: "海外旅行", q9: "チャーハンのおいしい店　東竜", q10: "カフェ巡り", q11: "思い出を振り返る", q12: "浴衣", q13: "パルキア"}},
{ id: 7, name: 'ディン　ヴァン　ソン', company: '日本ITビジネスカレッジ', url: "c_biz", birthday: '1998年10月24日', answers: { q1: "スイス", q2: "エビ", q3: "ドラゴン桜", q4: "焼き芋", q5: "サッカー選手", q6: "レオン", q7: "Marry Me", q8: "帰国", q9: "知りません", q10: "読書", q11: "告白", q12: "剣道", q13: "リザードン"}},
{ id: 8, name: 'チョウ　マンカ', company: 'きらぼしシステム', url: "c_kira", birthday: '1999年02月18日', answers: { q1: "ヴェネツィア", q2: "セロリ", q3: "绫辻行人『時計館の殺人』", q4: "お母さんが作ってくれるチンジャオロース", q5: "宇宙研究者", q6: "野良猫", q7: "道 - EXILE", q8: "家族と恋人に会いにいく", q9: "ガスト", q10: "ゲームのストーリーを鑑賞", q11: "恋人との約束を果たす", q12: "部活", q13: "ゼニガメ "}},
{ id: 9, name: '鶴岡里紗', company: 'きらぼしシステム', url: "c_kira", birthday: '2002年09月17日', answers: { q1: "カナダ", q2: "レバー", q3: "最後に読んだのが又吉の「火花」だったような、、", q4: "チーズケーキ", q5: "お花屋さんとアイスクリーム屋さん", q6: "ビーバー", q7: "CUTIE STREET「ちきゅーめいくあっぷ計画」", q8: "日本各地の温泉に行く", q9: "-", q10: "カフェ巡り、卓球", q11: "家族・お友達と会う", q12: "着物 振袖・袴", q13: "パチリス"}},
{ id: 10, name: 'デイビット　ピネダ', company: 'シードライブ', url: "c_cdr", birthday: '2002年10月11日', answers: { q1: "ブラジル", q2: "ホタテ", q3: "i don't have a mouth but i must scream", q4: "シカゴピザ", q5: "宇宙飛行士", q6: "ピットブル", q7: "NAS 「Nas is like」", q8: "海外旅行", q9: "知りません", q10: "バイク", q11: "大切な人と過ごす", q12: "武道", q13: "アルセウス"}},
{ id: 11, name: 'ド　テウ　フエン', company: 'GAKUSAI', url: "c_gaku", birthday: '2000年08月28日', answers: { q1: "", q2: "脂身", q3: "老人と海", q4: "家族と一緒に食べるなら何でも", q5: "", q6: "ハリネズミ", q7: "一目惚れ", q8: "ドラム学習", q9: "知りません(T.T)　", q10: "音楽", q11: "大切な人に思いやりのある言葉をかける", q12: "花見", q13: "mewtwo"}},
{ id: 12, name: 'レ　ゴック　ユイ', company: 'GAKUSAI', url: "c_gaku", birthday: '1993年04月29日', answers: { q1: "", q2: "特になし", q3: "家なき子(小説)", q4: "母の料理", q5: "", q6: "猫ちゃん", q7: "東京VICTORY (サザンオールスターズ)", q8: "実家への帰省", q9: "", q10: "盆栽、写真撮影、DIY", q11: "彼女と楽しく一日を過ごす", q12: "盆栽", q13: "ゼニガメ"}},
{ id: 13, name: '和田光司', company: 'きらぼしシステム', url: "c_kira", birthday: '2002年08月31日', answers: { q1: "イギリス", q2: "ぬか漬け、イカの塩辛", q3: "日常(漫画)", q4: "小エビのサラダ(サイゼ)", q5: "野球選手", q6: "ナマケモノ", q7: "花に亡霊(ヨルシカ)", q8: "日本一周(お金もあれば)", q9: "Coffee bar & Shop coin", q10: "サッカー観戦", q11: "親と過ごす", q12: "米文化", q13: "レシラム"}},
];

const questions_data = {
    q1: "旅行として一回でも行ってみたい国何ですか",
    q2: "嫌いな食べ物は？",
    q3: "おすすめしたい小説・漫画",
    q4: "人生最後に食べたいものは何？",
    q5: "小さい子どもの頃の将来の夢は？",
    q6: "自分を動物に例えると何？",
    q7: "お好きな曲は何？",
    q8: "一ヶ月の休みを取れれば、何がしたい？",
    q9: "お勧めor気になる飲食店（茅場町・中央区）",
    q10: "趣味はなんですか？",
    q11: "もし明日は人生の終末の日なら、今日こそやりたいことは何？",
    q12: "日本の文化の中、一番好きなのは何ですか？",
    q13: "ピカチュウ以外で好きなポケモンは？(知ってるポケモンでも)",
};

export const company_url = {
    c_biz: "https://setouchicollege.com/",
    c_kira: "https://www.kiraboshi-system.co.jp/",
    c_khro: "https://www.khronos.co.jp/",
    c_cdr: "https://www.cdrive-inc.jp/",
    c_gaku: "https://www.gakusai.ai/"
} 