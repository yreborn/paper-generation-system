document.addEventListener('DOMContentLoaded', function() {
    const templateSelector = document.getElementById('template-selector');
    const loadTemplateBtn = document.getElementById('load-template');
    const editor = document.getElementById('editor');
    const downloadBtn = document.getElementById('download-btn');
    const printBtn = document.getElementById('print-btn');
    
    // 模板内容
    const templates = {
        science: `
            <h3 class="exam-title">科学期末考试</h3>
            <div class="exam-info">
                <p>班级：__________ 姓名：__________ 学号：__________</p>
                <p>时间：90分钟 满分：100分</p>
            </div>
            <div class="exam-content">
                <div class="section">
                    <h4>一、选择题（每题4分，共20分）</h4>
                    <div class="question">
                        <p>1. 下列哪种气体在空气中含量最多？</p>
                        <p>A. 氧气</p>
                        <p>B. 氮气</p>
                        <p>C. 二氧化碳</p>
                        <p>D. 氢气</p>
                    </div>
                    <div class="question">
                        <p>2. 下列哪种物质不是单质？</p>
                        <p>A. 氧气</p>
                        <p>B. 氮气</p>
                        <p>C. 水</p>
                        <p>D. 金</p>
                    </div>
                    <div class="question">
                        <p>3. 下列哪种现象属于化学变化？</p>
                        <p>A. 冰融化</p>
                        <p>B. 水蒸发</p>
                        <p>C. 木材燃烧</p>
                        <p>D. 糖溶解</p>
                    </div>
                    <div class="question">
                        <p>4. 人体中含量最多的元素是？</p>
                        <p>A. 碳</p>
                        <p>B. 氧</p>
                        <p>C. 氢</p>
                        <p>D. 氮</p>
                    </div>
                    <div class="question">
                        <p>5. 下列哪种力不是基本力？</p>
                        <p>A. 重力</p>
                        <p>B. 电磁力</p>
                        <p>C. 强核力</p>
                        <p>D. 弱核力</p>
                    </div>
                </div>
                <div class="section">
                    <h4>二、填空题（每题4分，共20分）</h4>
                    <div class="question">
                        <p>1. 地球自转一周的时间是________小时。</p>
                    </div>
                    <div class="question">
                        <p>2. 水的化学式是________。</p>
                    </div>
                    <div class="question">
                        <p>3. 声音在空气中的传播速度约为________米/秒。</p>
                    </div>
                    <div class="question">
                        <p>4. 人体的血液pH值约为________。</p>
                    </div>
                    <div class="question">
                        <p>5. 太阳系中最大的行星是________。</p>
                    </div>
                </div>
                <div class="section">
                    <h4>三、实验题（每题10分，共30分）</h4>
                    <div class="question">
                        <p>1. 描述测定物体密度的实验步骤。</p>
                    </div>
                    <div class="question">
                        <p>2. 描述观察植物细胞的实验步骤。</p>
                    </div>
                    <div class="question">
                        <p>3. 描述验证欧姆定律的实验步骤。</p>
                    </div>
                </div>
                <div class="section">
                    <h4>四、综合题（30分）</h4>
                    <div class="question">
                        <p>1. 分析全球气候变化的原因、影响及可能的解决方案。（15分）</p>
                    </div>
                    <div class="question">
                        <p>2. 论述能源危机与可持续发展的关系。（15分）</p>
                    </div>
                </div>
            </div>
        `,
        history: `
            <h3 class="exam-title">历史期末考试</h3>
            <div class="exam-info">
                <p>班级：__________ 姓名：__________ 学号：__________</p>
                <p>时间：90分钟 满分：100分</p>
            </div>
            <div class="exam-content">
                <div class="section">
                    <h4>一、选择题（每题3分，共30分）</h4>
                    <div class="question">
                        <p>1. 中国历史上第一个统一的多民族封建国家是：</p>
                        <p>A. 夏朝</p>
                        <p>B. 商朝</p>
                        <p>C. 秦朝</p>
                        <p>D. 汉朝</p>
                    </div>
                    <div class="question">
                        <p>2. 下列哪次事件标志着中国近代史的开始？</p>
                        <p>A. 鸦片战争</p>
                        <p>B. 甲午战争</p>
                        <p>C. 八国联军侵华</p>
                        <p>D. 辛亥革命</p>
                    </div>
                    <div class="question">
                        <p>3. 法国大革命爆发的时间是：</p>
                        <p>A. 1689年</p>
                        <p>B. 1789年</p>
                        <p>C. 1889年</p>
                        <p>D. 1989年</p>
                    </div>
                    <div class="question">
                        <p>4. 第二次世界大战的转折点是：</p>
                        <p>A. 珍珠港事件</p>
                        <p>B. 斯大林格勒战役</p>
                        <p>C. 诺曼底登陆</p>
                        <p>D. 广岛原子弹爆炸</p>
                    </div>
                    <div class="question">
                        <p>5. 中华人民共和国成立的时间是：</p>
                        <p>A. 1945年10月1日</p>
                        <p>B. 1949年10月1日</p>
                        <p>C. 1950年10月1日</p>
                        <p>D. 1954年10月1日</p>
                    </div>
                    <div class="question">
                        <p>6. 文艺复兴最早兴起于：</p>
                        <p>A. 法国</p>
                        <p>B. 英国</p>
                        <p>C. 意大利</p>
                        <p>D. 德国</p>
                    </div>
                    <div class="question">
                        <p>7. 下列哪位不是中国古代"四大发明"的发明者？</p>
                        <p>A. 蔡伦</p>
                        <p>B. 毕升</p>
                        <p>C. 张衡</p>
                        <p>D. 李时珍</p>
                    </div>
                    <div class="question">
                        <p>8. 美国独立战争的领导人是：</p>
                        <p>A. 林肯</p>
                        <p>B. 华盛顿</p>
                        <p>C. 杰斐逊</p>
                        <p>D. 罗斯福</p>
                    </div>
                    <div class="question">
                        <p>9. "一战"爆发的直接原因是：</p>
                        <p>A. 经济危机</p>
                        <p>B. 民族矛盾</p>
                        <p>C. 萨拉热窝事件</p>
                        <p>D. 殖民地争夺</p>
                    </div>
                    <div class="question">
                        <p>10. 中国共产党成立的时间是：</p>
                        <p>A. 1919年</p>
                        <p>B. 1921年</p>
                        <p>C. 1925年</p>
                        <p>D. 1927年</p>
                    </div>
                </div>
                <div class="section">
                    <h4>二、材料分析题（每题15分，共30分）</h4>
                    <div class="question">
                        <p>材料一：</p>
                        <p>"我们的国家，不论在哪一方面，都决不能依赖外国。我们要自立更生。我们要在一个落后的经济基础上，建立起先进的工业、先进的农业、先进的科学技术和先进的国防。"</p>
                        <p>问题：</p>
                        <p>1. 这段话反映了新中国成立初期怎样的历史背景和发展战略？</p>
                        <p>2. 分析这一战略对中国发展的影响。</p>
                    </div>
                    <div class="question">
                        <p>材料二：</p>
                        <p>"本世纪之战争，非昔日能比。无论在军事上、政治上、经济上，均须全体国民一致努力，乃有成功之望。"</p>
                        <p>问题：</p>
                        <p>1. 这段话反映了哪一历史时期的特点？</p>
                        <p>2. 分析这一时期中国面临的主要问题和应对措施。</p>
                    </div>
                </div>
                <div class="section">
                    <h4>三、论述题（40分）</h4>
                    <div class="question">
                        <p>1. 论述改革开放对中国社会发展的影响。（20分）</p>
                    </div>
                    <div class="question">
                        <p>2. 比较中国古代与西方近代民主思想的异同。（20分）</p>
                    </div>
                </div>
            </div>
        `,
        default: `
            <h3 class="exam-title">期末考试</h3>
            <div class="exam-info">
                <p>班级：__________ 姓名：__________ 学号：__________</p>
                <p>时间：90分钟 满分：100分</p>
            </div>
            <div class="exam-content">
                <div class="section">
                    <h4>一、选择题（每题5分，共20分）</h4>
                    <div class="question">
                        <p>1. 下列哪项不是可再生能源？</p>
                        <p>A. 太阳能</p>
                        <p>B. 风能</p>
                        <p>C. 煤炭</p>
                        <p>D. 水力发电</p>
                    </div>
                    <div class="question">
                        <p>2. 下列哪种动物不是哺乳动物？</p>
                        <p>A. 鲸鱼</p>
                        <p>B. 蝙蝠</p>
                        <p>C. 鸭嘴兽</p>
                        <p>D. 鳄鱼</p>
                    </div>
                    <div class="question">
                        <p>3. 下列哪个国家不是联合国安理会常任理事国？</p>
                        <p>A. 中国</p>
                        <p>B. 美国</p>
                        <p>C. 德国</p>
                        <p>D. 俄罗斯</p>
                    </div>
                    <div class="question">
                        <p>4. 人体最大的器官是？</p>
                        <p>A. 心脏</p>
                        <p>B. 肝脏</p>
                        <p>C. 皮肤</p>
                        <p>D. 肺</p>
                    </div>
                </div>
                <div class="section">
                    <h4>二、填空题（每题5分，共20分）</h4>
                    <div class="question">
                        <p>1. 地球表面约有________%的面积被水覆盖。</p>
                    </div>
                    <div class="question">
                        <p>2. 光合作用的主要原料是________和________。</p>
                    </div>
                    <div class="question">
                        <p>3. 我国四大发明是________、________、________和________。</p>
                    </div>
                    <div class="question">
                        <p>4. 人体的正常体温约为________℃。</p>
                    </div>
                </div>
                <div class="section">
                    <h4>三、简答题（每题15分，共30分）</h4>
                    <div class="question">
                        <p>1. 简述温室效应的原理及其对地球环境的影响。</p>
                    </div>
                    <div class="question">
                        <p>2. 简述互联网对现代社会生活的影响。</p>
                    </div>
                </div>
                <div class="section">
                    <h4>四、论述题（30分）</h4>
                    <div class="question">
                        <p>请论述科技发展对人类社会的积极影响和潜在风险，并提出你的观点和建议。（不少于500字）</p>
                    </div>
                </div>
            </div>
        `,
        math: `
            <h3 class="exam-title">数学期末考试</h3>
            <div class="exam-info">
                <p>班级：__________ 姓名：__________ 学号：__________</p>
                <p>时间：90分钟 满分：100分</p>
            </div>
            <div class="exam-content">
                <div class="section">
                    <h4>一、选择题（每题5分，共20分）</h4>
                    <div class="question">
                        <p>1. 若 x² + y² = 1，则 x + y 的最大值是</p>
                        <p>A. √2</p>
                        <p>B. 1</p>
                        <p>C. 2</p>
                        <p>D. 0</p>
                    </div>
                    <div class="question">
                        <p>2. 函数 f(x) = ln(x²) 的定义域是</p>
                        <p>A. (-∞, +∞)</p>
                        <p>B. (0, +∞)</p>
                        <p>C. (-∞, 0) ∪ (0, +∞)</p>
                        <p>D. [0, +∞)</p>
                    </div>
                    <div class="question">
                        <p>3. 已知 sin α = 0.6，且 α 是第一象限角，则 cos α 等于</p>
                        <p>A. 0.8</p>
                        <p>B. -0.8</p>
                        <p>C. 0.6</p>
                        <p>D. -0.6</p>
                    </div>
                    <div class="question">
                        <p>4. 等比数列 {an} 的前n项和为 Sn，若 a1 = 3，S3 = 21，则公比 q 等于</p>
                        <p>A. 2</p>
                        <p>B. 3</p>
                        <p>C. -2</p>
                        <p>D. -3</p>
                    </div>
                </div>
                <div class="section">
                    <h4>二、填空题（每题5分，共20分）</h4>
                    <div class="question">
                        <p>1. 函数 f(x) = sin(x) 的导数是 __________。</p>
                    </div>
                    <div class="question">
                        <p>2. 方程 x² - 4x + 3 = 0 的两个根分别是 __________ 和 __________。</p>
                    </div>
                    <div class="question">
                        <p>3. 已知向量 a = (1, 2), b = (3, -1)，则 a·b = __________。</p>
                    </div>
                    <div class="question">
                        <p>4. 曲线 y = x³ 在点 (2, 8) 处的切线方程是 __________。</p>
                    </div>
                </div>
                <div class="section">
                    <h4>三、解答题（每题15分，共60分）</h4>
                    <div class="question">
                        <p>1. 求函数 f(x) = x³ - 3x² + 2 的极值点及极值。</p>
                    </div>
                    <div class="question">
                        <p>2. 已知椭圆 x²/a² + y²/b² = 1 (a > b > 0) 的离心率为 0.5，求椭圆的标准方程。</p>
                    </div>
                    <div class="question">
                        <p>3. 解不等式 log₂(x+1) + log₂(x-1) > 3。</p>
                    </div>
                    <div class="question">
                        <p>4. 证明：对于任意的实数 a, b, c，若 a + b + c = 0，则 a³ + b³ + c³ = 3abc。</p>
                    </div>
                </div>
            </div>
        `,
        language: `
            <h3 class="exam-title">语文期末考试</h3>
            <div class="exam-info">
                <p>班级：__________ 姓名：__________ 学号：__________</p>
                <p>时间：120分钟 满分：100分</p>
            </div>
            <div class="exam-content">
                <div class="section">
                    <h4>一、阅读理解（30分）</h4>
                    <div class="question">
                        <p>阅读下面的文章，回答问题：</p>
                        <p>人们常说，生活就像一面镜子，你对它笑，它就对你笑；你对它哭，它就对你哭。这句话揭示了一个简单而深刻的道理：我们的态度决定了我们如何看待世界，也决定了世界如何回应我们。</p>
                        <p>积极的心态能够帮助我们在困境中看到希望，在挑战中发现机遇。当我们以乐观的态度面对生活时，我们更容易注意到生活中的美好，更容易感受到幸福。相反，消极的心态则会让我们陷入自我怀疑和抱怨的恶性循环中，使我们看不到前进的方向。</p>
                        <p>心理学研究表明，积极的心态不仅能够提高我们的幸福感，还能增强我们的抗压能力和创造力。那些能够在逆境中保持积极心态的人，往往能够更好地应对挑战，更快地从失败中恢复。</p>
                        <p>当然，保持积极心态并不意味着忽视问题或逃避现实。相反，它是一种面对现实的勇气，是一种相信自己有能力解决问题的信心。真正的积极心态是建立在对现实的清醒认识基础上的，它让我们能够看到问题的同时，也能看到解决问题的可能性。</p>
                        <p>培养积极心态需要时间和练习。我们可以通过关注生活中的积极面、学会感恩、设定合理的目标、与积极的人交往等方式来培养积极的心态。当我们逐渐养成积极思考的习惯时，我们会发现生活变得更加美好，我们也变得更加强大。</p>
                        
                        <p>1. 这篇文章的主题是什么？</p>
                        <p>2. 文章中提到积极心态有哪些好处？</p>
                        <p>3. 根据文章，真正的积极心态是什么？</p>
                        <p>4. 文章提出了哪些培养积极心态的方法？</p>
                        <p>5. 请结合自身经历，谈谈积极心态对你的影响。</p>
                    </div>
                </div>
                <div class="section">
                    <h4>二、文言文阅读（20分）</h4>
                    <div class="question">
                        <p>阅读下面的文言文，回答问题：</p>
                        <p>岳飞，字鹏举，相州汤阴人也。少孤贫，与母居。家徒四壁，不异清贫。母亲抚养教育，刻苦备至。</p>
                        <p>飞少负气节，尝与同舍生博弈，生指飞背曰："尔背上当有万夫长字。"飞跃然喜曰："此天以告我也。"自是刻苦学习，尤好【左氏春秋】、【孙吴兵法】。身长七尺，腰大十围，膂力过人。学射，百发百中。</p>
                        <p>金人犯边，飞从宗泽于汴京，补为承宣使臂带。金人陷汴京，徽宗、钦宗北狩，高宗即位于南京。飞率兵十三人，径投南京，拜为建武副军统制。从韩世忠大破金人于符离，擢为统制。从宗泽收复郑、洛、嵩、汝，擢为武胜军承宣使。</p>
                        <p>建炎四年，金人再寇中原，飞与韩世忠等分道御之。金人围襄阳，飞与金人战于襄阳城外，大破之，斩首五千余级。金人退走，飞率兵追击，连战皆捷。</p>
                        <p>绍兴十一年，秦桧以莫须有之罪，诬陷岳飞，飞与子岳云同遇害于临安风波亭，年三十九。</p>
                        
                        <p>1. 解释下列加点词语在文中的意思：</p>
                        <p>（1）少孤贫：</p>
                        <p>（2）不异清贫：</p>
                        <p>（3）尝与同舍生博弈：</p>
                        <p>（4）飞跃然喜曰：</p>
                        
                        <p>2. 翻译下列句子：</p>
                        <p>（1）飞少负气节，尝与同舍生博弈，生指飞背曰："尔背上当有万夫长字。"</p>
                        <p>（2）金人围襄阳，飞与金人战于襄阳城外，大破之，斩首五千余级。</p>
                        
                        <p>3. 根据文章内容，概括岳飞的主要事迹和品质特点。</p>
                    </div>
                </div>
                <div class="section">
                    <h4>三、诗词鉴赏（20分）</h4>
                    <div class="question">
                        <p>阅读下面这首诗，回答问题：</p>
                        <p>《登高》</p>
                        <p>杜甫</p>
                        <p>风急天高猿啸哀，渚清沙白鸟飞回。</p>
                        <p>无边落木萧萧下，不尽长江滚滚来。</p>
                        <p>万里悲秋常作客，百年多病独登台。</p>
                        <p>艰难苦恨繁霜鬓，潦倒新停浊酒杯。</p>
                        
                        <p>1. 这首诗描绘了怎样的秋景？</p>
                        <p>2. 诗人在这首诗中表达了怎样的情感？</p>
                        <p>3. 分析"无边落木萧萧下，不尽长江滚滚来"两句的艺术表现手法。</p>
                    </div>
                </div>
                <div class="section">
                    <h4>四、作文（30分）</h4>
                    <div class="question">
                        <p>请以"我的理想"为题，写一篇不少于800字的作文。要求：立意自定，内容充实，感情真挚，语言流畅。</p>
                    </div>
                </div>
            </div>
        `,
        english: `
            <h3 class="exam-title">英语期末考试</h3>
            <div class="exam-info">
                <p>班级：__________ 姓名：__________ 学号：__________</p>
                <p>时间：90分钟 满分：100分</p>
            </div>
            <div class="exam-content">
                <div class="section">
                    <h4>I. Listening Comprehension (20 points)</h4>
                    <div class="question">
                        <p>Listen to the recording and choose the best answer:</p>
                        <p>1. What is the woman's problem?</p>
                        <p>A. She lost her wallet.</p>
                        <p>B. She can't find her keys.</p>
                        <p>C. She missed her bus.</p>
                        <p>D. She is late for work.</p>
                    </div>
                    <div class="question">
                        <p>2. Where are the speakers?</p>
                        <p>A. At a restaurant</p>
                        <p>B. At a library</p>
                        <p>C. At a school</p>
                        <p>D. At a hospital</p>
                    </div>
                    <div class="question">
                        <p>3. What will the man do next?</p>
                        <p>A. Go to a meeting</p>
                        <p>B. Help the woman</p>
                        <p>C. Call the police</p>
                        <p>D. Look for his own keys</p>
                    </div>
                </div>
                <div class="section">
                    <h4>II. Vocabulary and Grammar (20 points)</h4>
                    <div class="question">
                        <p>Choose the correct answer:</p>
                        <p>1. She ________ in London for five years before moving to Paris.</p>
                        <p>A. lives</p>
                        <p>B. has lived</p>
                        <p>C. had lived</p>
                        <p>D. was living</p>
                    </div>
                    <div class="question">
                        <p>2. If I ________ you, I would take the job offer.</p>
                        <p>A. am</p>
                        <p>B. was</p>
                        <p>C. were</p>
                        <p>D. had been</p>
                    </div>
                    <div class="question">
                        <p>3. The book ________ last month has already become a bestseller.</p>
                        <p>A. published</p>
                        <p>B. was published</p>
                        <p>C. publishing</p>
                        <p>D. is published</p>
                    </div>
                    <div class="question">
                        <p>4. She's the woman ________ husband works at the university.</p>
                        <p>A. who</p>
                        <p>B. whom</p>
                        <p>C. which</p>
                        <p>D. whose</p>
                    </div>
                </div>
                <div class="section">
                    <h4>III. Reading Comprehension (30 points)</h4>
                    <div class="question">
                        <p>Read the passage and answer the questions:</p>
                        <p>Artificial intelligence (AI) is transforming the way we live and work. From virtual assistants like Siri and Alexa to self-driving cars and advanced medical diagnostics, AI technologies are becoming increasingly integrated into our daily lives.</p>
                        <p>One of the most significant impacts of AI is in the workplace. Many routine tasks that were once performed by humans are now being automated, leading to increased efficiency and productivity. However, this automation has also raised concerns about job displacement. While some jobs may become obsolete, new roles are emerging that require skills in managing and working alongside AI systems.</p>
                        <p>In healthcare, AI is being used to analyze medical images, predict disease outbreaks, and develop personalized treatment plans. These applications have the potential to improve patient outcomes and reduce healthcare costs. However, they also raise important ethical questions about data privacy and the role of human judgment in medical decision-making.</p>
                        <p>Education is another field being transformed by AI. Adaptive learning platforms can personalize education to meet the needs of individual students, providing additional support where needed and allowing advanced students to progress more quickly. AI can also free up teachers' time by automating administrative tasks, allowing them to focus more on direct interaction with students.</p>
                        <p>Despite its potential benefits, the rapid advancement of AI also presents challenges. Ensuring that AI systems are transparent, fair, and accountable is crucial. There are concerns about bias in AI algorithms, which can perpetuate and even amplify existing social inequalities. Additionally, as AI becomes more sophisticated, questions about control and safety become increasingly important.</p>
                        <p>As we continue to develop and deploy AI technologies, it is essential that we do so thoughtfully, considering both the potential benefits and risks. This requires collaboration between technologists, policymakers, ethicists, and the public to ensure that AI serves humanity's best interests.</p>
                        
                        <p>1. According to the passage, what is one way AI is changing the workplace?</p>
                        <p>A. It is creating more routine tasks.</p>
                        <p>B. It is automating routine tasks.</p>
                        <p>C. It is eliminating all human jobs.</p>
                        <p>D. It is reducing workplace efficiency.</p>
                        
                        <p>2. What concern does the passage raise about AI in healthcare?</p>
                        <p>A. It is too expensive to implement.</p>
                        <p>B. It raises questions about data privacy.</p>
                        <p>C. It is not effective in treating diseases.</p>
                        <p>D. It requires too much training for medical staff.</p>
                        
                        <p>3. How can AI benefit education according to the passage?</p>
                        <p>A. By replacing teachers</p>
                        <p>B. By standardizing all learning</p>
                        <p>C. By personalizing learning for individual students</p>
                        <p>D. By making education more expensive</p>
                        
                        <p>4. What does the passage suggest is necessary for the responsible development of AI?</p>
                        <p>A. Limiting AI research</p>
                        <p>B. Collaboration between various stakeholders</p>
                        <p>C. Focusing only on economic benefits</p>
                        <p>D. Allowing AI to develop without human intervention</p>
                        
                        <p>5. What is the main purpose of this passage?</p>
                        <p>A. To argue that AI is dangerous and should be restricted</p>
                        <p>B. To explain how AI works from a technical perspective</p>
                        <p>C. To discuss the impacts and challenges of AI in society</p>
                        <p>D. To predict the future development of AI technologies</p>
                    </div>
                </div>
                <div class="section">
                    <h4>IV. Writing (30 points)</h4>
                    <div class="question">
                        <p>Write an essay about the advantages and disadvantages of social media in modern society. Your essay should be about 150-200 words.</p>
                    </div>
                </div>
            </div>
        `,
        custom: `
            <h3 class="exam-title">自定义试卷</h3>
            <div class="exam-info">
                <p>班级：__________ 姓名：__________ 学号：__________</p>
                <p>时间：_____分钟 满分：_____分</p>
            </div>
            <div class="exam-content">
                <div class="section">
                    <h4>一、选择题</h4>
                    <div class="question">
                        <p>1. 请在此处添加问题</p>
                        <p>A. 选项A</p>
                        <p>B. 选项B</p>
                        <p>C. 选项C</p>
                        <p>D. 选项D</p>
                    </div>
                    <div class="question">
                        <p>2. 请在此处添加问题</p>
                        <p>A. 选项A</p>
                        <p>B. 选项B</p>
                        <p>C. 选项C</p>
                        <p>D. 选项D</p>
                    </div>
                </div>
                <div class="section">
                    <h4>二、填空题</h4>
                    <div class="question">
                        <p>1. 请在此处添加填空题 ____________。</p>
                    </div>
                    <div class="question">
                        <p>2. 请在此处添加填空题 ____________。</p>
                    </div>
                </div>
                <div class="section">
                    <h4>三、简答题</h4>
                    <div class="question">
                        <p>1. 请在此处添加简答题。</p>
                    </div>
                </div>
                <div class="section">
                    <h4>四、论述题</h4>
                    <div class="question">
                        <p>1. 请在此处添加论述题。</p>
                    </div>
                </div>
            </div>
        `
    };
    
    // 加载模板
    loadTemplateBtn.addEventListener('click', function() {
        const selectedTemplate = templateSelector.value;
        editor.innerHTML = templates[selectedTemplate];
    });
    
    // 下载试卷
    downloadBtn.addEventListener('click', function() {
        const content = `
            <!DOCTYPE html>
            <html lang="zh-CN">
            <head>
                <meta charset="UTF-8">
                <title>试卷</title>
                <style>
                    body {
                        font-family: "Microsoft YaHei", Arial, sans-serif;
                        line-height: 1.6;
                        padding: 20px;
                    }
                    .exam-title {
                        text-align: center;
                        font-size: 24px;
                        margin-bottom: 15px;
                    }
                    .exam-info {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .section {
                        margin-bottom: 20px;
                    }
                    .question {
                        margin-bottom: 15px;
                        padding-left: 20px;
                    }
                </style>
            </head>
            <body>
                ${editor.innerHTML}
            </body>
            </html>
        `;
        
        const blob = new Blob([content], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = '试卷.html';
        document.body.appendChild(a);
        a.click();
        
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    });
    
    // 打印试卷
    printBtn.addEventListener('click', function() {
        window.print();
    });
});