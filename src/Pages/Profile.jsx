import '../style/Main.scss'
import FadeInSection from '../Components/FadeInSection';

import { userData } from "./Member_page";
import { company_url } from './Member_page';

import my_img from "../img/my_img.jpg"
import my_cp from "../img/my_cp.jpg"
import act_img from "../img/act_img.jpg"

function Profile() {
    return (
        <FadeInSection>
            {/* member_profileのuserDataリストを使用している。 */}
            {userData.filter(userData => userData.id === 3).map(({ name, company, url, birthday }, index) => (
                <div className='Profile'>
                    <img className="img img_member" src={my_img} />
                    <h3 className="title">＜自分のプロフィールページ＞</h3>
                    {/* <p>プロフィールですよ</p> */}
                    <p>名前：{name}</p>
                    <span className="member_profile_p">所属企業：<br /><a className="to-top-link" href={company_url[url]}>{company}</a></span>
                    <p className="member_profile_p">生年月日：<br />{birthday}</p>
                    <p>一言：<br />出身サークルの新人演劇公演が楽しみ！</p>
                    <div className='company_float'><a href={company_url[url]}><img className='img img_company' src={my_cp} /></a></div>
                </div>
            ))}

                    <div className='goal_table'>
                        <div className="goal_grid">
                            <p>研修終了までの目標</p>
                            <div className="category">ビジネス</div>
                            <div className="goal">
                                ・指摘事項を速やかに修正・反映する。（日報やWS等の指摘に対して、指摘された次研修日までに修正を試みる）
                            </div>
                            <div className="category">スキルアップ：テクニカル</div>
                            <div className="goal">
                                ・タッチタイピングを習得する。（寿司打でキーボードを見ない状態で、10,000円コースで10,000円獲得する）
                            </div>
                            <div className="goal">
                                ・データベースに関する知識を得る。（ワークショップにおいて設計や開発ができる、理解できるようにする）
                            </div>
                            <div className="category">スキルアップ：ヒューマン</div>
                            <div className="goal">
                                ・プレゼンにおいて突発的な質問に対応できる。（内容の充実を前提とし、抜けのあった項目に対して回答ができるようにする）
                            </div>
                            <div className="category">スキルアップ：その他</div>
                            <div className="goal">
                                ・Java Bronzeを取得する。
                            </div>
                            <div className="goal">
                                ・基本・応用情報の内容を復習する。（過去問道場(基本・応用)の模擬試験機能において、正答率70％以上を上回る）
                            </div>
                            <div className="category">生活習慣</div>
                            <div className="goal">
                                ・新居の生活空間を整える。(リモート業務を行えるレベルの環境を整える。掃除や備品の購入など)
                            </div>
                            <div className="goal">
                                ・週2以上自炊を行う。
                            </div>
                            <div className="goal">
                                ・体調管理のため姿勢を改善する。(猫背やストレートネックの改善)
                            </div>
                        </div>
                        <div className="goal_grid">
                            <p>1年後までの目標</p>
                            <div className="category">ビジネス</div>
                            <div className="goal">
                                ・社外の関係者とのコミュニケーションが円滑にとれるようにする。（訪問対応であれば担当者へのスムーズな引継ぎ、クライアント対応であればクライアントの要望を正しく成果物に落とし込む）
                            </div>
                            <div className="goal">
                                ・作業指示者もしくは作業委託者との意思疎通で齟齬を起こさないようにする。
                            </div>
                            <div className="category">スキルアップ：テクニカル</div>
                            <div className="goal">
                                ・単独で、DBを含むシステムを簡単なものでも開発する。
                            </div>
                            <div className="category">スキルアップ：ヒューマン</div>
                            <div className="goal">
                                ・面談等で、自身の実績や現在の状況を正確に相手に伝えることができる。
                            </div>
                            <div className="category">スキルアップ：その他</div>
                            <div className="goal">
                                ・IPA上位試験に合格する。（応用情報より上位に位置付けられている区分のうち、どれか1つ）
                            </div>
                            <div className="category">生活習慣</div>
                            <div className="goal">
                                ・シェアハウスの他の住人と、コミュニケーションを取る。
                            </div>
                        </div>
                    </div>


                    <div className='void'></div>
                    <p className='text_bold'>おすすめの演劇・ミュージカル：</p>
                    <p>ミュージカル　憂国のモリアーティ</p>
                    <p>
                        19世紀のロンドンを舞台にした、ジェームス・モリアーティとシャーロック・ホームズの物語。<br/>
                        漫画「憂国のモリアーティ」を原作として作られたミュージカルであり、全5編からなる。<br/>
                        階級社会による差別や悪、それを暴こうとするもの、正そうとするもの、断罪しようとするものたちの交錯が感じられる。
                    </p>
                    <div className='grid_exp'>
                        <a href='https://www.marv.jp/special/moriarty/'><img className="img img_pre" src={act_img}></img></a>
                        <p>
                            時は19世紀末、大英帝国最盛期(パクス・ブリタニカ)のロンドン――。<br/>
                            <br/>
                            古くから根付く完全階級制度により、上流階級の人間達に支配されている「大英帝国」。<br/>
                            生まれ落ちた時から一生涯の身分が決まるこの社会制度は、必然的に人間同士の差別を生んだ。<br/>
                            そんな中、階級制度による悪を取り除き、理想の国を作ろうとする青年がいた。<br/>
                            <br/>
                            <br/>
                            これはジェームズ・モリアーティ、<br/>
                            或いはシャーロック・ホームズの敵(かたきの話――。<br/>
                            <br/>
                            (株式会社マーベラス「憂国のモリアーティ」紹介ページより)
                        </p>
                    </div>
        </FadeInSection>
    );
} export default Profile;