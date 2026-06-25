/* ==========================================================
   i18n.js — EN / ZH bilingual engine
   Usage: set window.BASE_PATH before this script loads.
   Lang stored in localStorage key "ec_lang".
   ========================================================== */
(function () {
  'use strict';

  /* ========================================================
     1. COMMON UI STRINGS  (nav, footer, homepage data-i18n)
     ======================================================== */
  const T = {
    en: {
      // Nav
      nav_treatments:'Treatments',
      nav_head_eye:'Head & Eye Treatment',
      nav_facial:'Facial Treatment', nav_facial_hydrate:'Hydrating & Brightening',
      nav_facial_smooth:'Smooth Skin Conditioning', nav_facial_relax:'Natural Facial Relaxation',
      nav_facial_contour:'Soft Contour Nursing',
      nav_body_mud:'Body Mud Therapy', nav_body_warm:'Warm Body Pampering',
      nav_body_muscle:'Relax Stiff Muscles', nav_body_full:'Full Body Mud Therapy',
      nav_shaping:'Body Shaping',
      nav_promo:'Promotions', nav_locs:'Locations',
      nav_loc_tp:'Tanjong Pagar', nav_loc_hv:'Holland Village',
      nav_loc_ec:'East Coast', nav_loc_sg:'Serangoon Garden', nav_loc_or:'Orchard',
      nav_learn:'Learn More', nav_story:'Our Story', nav_phil:'Our Philosophy',
      nav_tech:'Technologies', nav_reviews:'Reviews', nav_blog:'Blog',
      nav_faq:'FAQ', nav_contact:'Contact', btn_book:'Book Now',
      // Footer
      ft_tagline:"Over 10 years of trusted facial & treatment expertise in Singapore.",
      ft_col_treat:'Treatments', ft_col_locs:'Locations',
      ft_col_company:'Company', ft_col_contact:'Contact',
      ft_hrs1:'Daily: 10.30am - 10.30pm (By appointment only)',
      ft_copy:'© 2026 EC Centre. All rights reserved.',
      ft_terms:'Terms & Conditions', ft_privacy:'Privacy Policy',
      // Homepage
      h_badge:"★ Singapore's #1 Multi-Award-Winning",
      h_title:'<span style="font-size:.45em;font-weight:600;letter-spacing:.5px">Singapore\'s No.1 Functional Wellness</span><br>Beautiful Skin<br><em>Starts Here</em>',
      h_sub:"Over 10 years of trusted facial &amp; treatment expertise in Singapore.",
      h_s_yrs:'Years Experience', h_s_cli:'Happy Clients',
      h_s_loc:'Clinic Locations', h_s_aw:'Awards Won',
      h_btn1:'Discover Our Treatments', h_btn2:'Free Consultation',
      tr_tag:'Our Expertise', tr_title:'Our Treatments',
      tr_sub:'Discover our comprehensive range of advanced aesthetic treatments designed for visible results from the very first session.',
      t1_h:'Head & Eye Treatment', t1_p:'Professional head care and eye relaxation treatments. Rebalance your body, refresh your skin, reconnect with your best self.', t1_a:'Discover',
      t2_h:'Facial Treatment', t2_p:'Gentle facial pampering with skin brightening, deep hydration, smooth conditioning and natural relaxation for daily skin care.', t2_a:'Discover',
      t3_h:'Body Mud Therapy', t3_p:'Whole body mud therapy to warm and relax stiff muscles, comfort tired limbs and restore full body vitality.', t3_a:'Discover',
      t4_h:'Body Shaping', t4_p:'Advanced body shaping treatments to sculpt, tone and firm your body contours for a confident new you.', t4_a:'Discover',
      pg_tag:'Signature Collection', pg_title:'Our Signature Programs',
      pg_sub:'Expertly curated treatment programs for comprehensive, long-lasting results.',
      p1_h:'Head & Eye Combo', p1_p:'One-stop dual relaxation — professional head care and eye treatment combined for complete stress relief.',
      p2_h:'Facial Peach Blossom Program', p2_p:'A full facial pampering course with brightening, hydrating, smoothing and contouring for luminous skin.',
      p3_h:'Full Body Mud Therapy', p3_p:'Whole body warm mud treatment to deeply relax muscles, soothe tired limbs and restore total body wellness.',
      p4_h:'Body Shaping Program', p4_p:'Targeted body shaping and toning program to sculpt your contours and restore a confident, firmer figure.',
      p5_h:'Total Relaxation Package', p5_p:'Combine head, eye, facial and body treatments in one indulgent full-body relaxation experience.',
      ab_tag:'Our Legacy', ab_title:'Always at the Forefront of Aesthetic Medicine',
      ab_p:'Founded by pioneering doctors and backed by BVA Technology, EstheClinic has been at the cutting edge of aesthetic medicine for over two decades. We combine medical-grade technology with expert care to deliver visible, lasting results — safely, effectively, and without pain.',
      ab_f1h:'Medical-Grade Technology', ab_f1p:'We use only the most advanced, clinically proven technologies approved for aesthetic use.',
      ab_f2h:'Expert Practitioners', ab_f2p:'Our team of specialists are trained to the highest international standards.',
      ab_f3h:'Personalized Care', ab_f3p:'Every treatment plan is fully customized to your unique skin type and goals.',
      ab_btn:'Discover Our Story',
      wy_tag:'Why EstheClinic', wy_title:"Singapore's Most Trusted Aesthetic Clinics",
      w1h:"Singapore's #1 Aesthetic Clinics", w1p:"Recognized as Singapore's leading aesthetic clinic with multiple prestigious awards year after year.",
      w2h:'Medical Grade Technology', w2p:'We use only clinically proven, medical-grade technologies for safe and highly effective treatments.',
      w3h:'No Pain, Only Gain', w3p:'All our treatments are designed to be comfortable and painless for the best possible experience.',
      w4h:'Results from 1st Session', w4p:'Experience the difference from your very first treatment — visible, measurable results guaranteed.',
      w5h:'20 Years of Experience', w5p:'Two decades of expertise in aesthetic medicine, trusted by over 20,000 satisfied customers.',
      aw_tag:'Recognition', aw_title:'Award-Winning Excellence',
      aw_sub:"Recognized by Singapore's most prestigious beauty and lifestyle publications.",
      rv_tag:'Customer Reviews', rv_title:'What Our Clients Say', rv_sub:'Over 20,000 happy customers and counting.',
      md_tag:'In The Press', md_title:'As Featured In',
      lc_tag:'Find Us', lc_title:'Our Locations', lc_sub:'Conveniently located across Singapore. Find a clinic near you.',
      lc_h1:'Mon–Fri: 10am – 8pm', lc_h2:'Sat: 9am – 6pm', lc_h3:'Sun & PH: Closed',
      lc_call:'Call', lc_view:'View Branch',
      nw_badge:'Exclusive Offer', nw_h2:'Get 50% Off Your First Session',
      nw_p:'Subscribe to our newsletter and receive an exclusive 50% discount on your first treatment, plus the latest tips and promotions.',
      nw_ph1:'Your Name', nw_ph2:'Your Email Address',
      nw_btn:'Claim My 50% Off', nw_priv:'We respect your privacy. No spam, ever.',
      ct_tag:'Get In Touch', ct_title:'Book a Consultation',
      ct_sub:'Ready to start your beauty journey? Contact us today for a free consultation.',
      ct_call:'Call Us', ct_wa:'WhatsApp', ct_email:'Email', ct_hrs:'Operating Hours',
      ct_hrs_v:'Daily: 10.30am - 10.30pm<br>By appointment only',
      fl_name:'Full Name *', fl_email:'Email *', fl_phone:'Phone',
      fl_loc:'Preferred Location', fl_treat:'Treatment Interest', fl_msg:'Message',
      fl_submit:'Send Message', fl_sel_c:'Select a clinic', fl_sel_t:'Select a treatment',
      btn_consult:'Book Free Consultation',
      btn_write_review:'★  Write a Review',
      badge_text:'No Package<br>Required',
      // Reviews carousel
      rv_title:'What Our Clients Say',
      rv_sub:'Real reviews from our valued clients across Singapore',
      rv1_text:'"The head & eye treatment was incredibly relaxing. My tension headaches disappeared after just one session. Therapists are so skilled — truly a hidden gem!"',
      rv1_name:'Sarah T.', rv1_role:'Marketing Manager',
      rv2_text:'"Best facial treatment in Singapore! My skin felt deeply hydrated and glowing for weeks. The team listened to my concerns and customised everything perfectly."',
      rv2_name:'Michelle L.', rv2_role:'Teacher',
      rv3_text:'"The body mud therapy is absolutely divine. Warm, soothing and my muscles felt completely rejuvenated. I left feeling like a brand new person. Will be back!"',
      rv3_name:'Jennifer K.', rv3_role:'Entrepreneur',
      rv4_text:'"Visible results after just 3 sessions of facial treatment — skin tone evened out noticeably. Professional team with a warm, welcoming approach every visit."',
      rv4_name:'Rachel W.', rv4_role:'Accountant',
      rv5_text:'"Came as a birthday treat and it exceeded every expectation. The ambience is so serene and the staff so thoughtful. Highly recommend to anyone!"',
      rv5_name:'Amanda C.', rv5_role:'HR Executive',
      rv6_text:'"Knowledgeable staff who took time to fully understand my needs before starting. Results were immediate. An outstanding experience — 10 out of 10!"',
      rv6_name:'David L.', rv6_role:'Software Engineer',
      // About section float badge
      ab_badge_lbl:'Years of Excellence',
      // Learn more link
      lm:'Learn More →',
      // Form placeholders
      ph_name:'Jane Doe', ph_email:'jane@example.com',
      ph_phone:'+65 9000 0000', ph_msg:'Tell us about your skin concerns...',
      // Form select misc
      opt_other:'Other',
      // Reviews
      rv1:'"I\'ve been coming to EstheClinic for laser hair removal for 2 years. The results are incredible — I\'m virtually hair-free and the staff are so professional and caring!"',
      rv2:'"The Instant Youth program transformed my skin completely. My colleagues kept asking if I had work done — the results are so natural and beautiful. Highly recommend!"',
      rv3:'"Finally found a clinic that truly understands my skin concerns. The acne treatment program cleared my skin in just a few sessions. I wish I had come here sooner!"',
      rv4:'"As a man, I was nervous about visiting an aesthetic clinic, but the team made me feel so comfortable. The hair removal treatment is painless and effective!"',
      rv5:'"The body treatment program is worth every cent. My cellulite has significantly reduced and my skin feels firmer and smoother. The team is so knowledgeable!"',
      rb1:'Tanjong Pagar Branch', rb2:'Holland Village Branch',
      rb3:'Orchard Branch', rb4:'East Coast Branch', rb5:'Serangoon Garden Branch',
    },
    zh: {
      // Nav
      nav_treatments:'疗程',
      nav_head_eye:'头眼舒缓疗程',
      nav_facial:'桃花面部疗程', nav_facial_hydrate:'柔润焕肤补水',
      nav_facial_smooth:'柔顺肌理护理', nav_facial_relax:'天然面部舒缓',
      nav_facial_contour:'柔和轮廓护理',
      nav_body_mud:'全身泥灸疗程', nav_body_warm:'温热全身养护',
      nav_body_muscle:'舒缓僵硬肌肉', nav_body_full:'全身泥灸护理',
      nav_shaping:'纤体塑形',
      nav_promo:'优惠活动', nav_locs:'门店地址',
      nav_loc_tp:'丹戎巴葛', nav_loc_hv:'荷兰村',
      nav_loc_ec:'东海岸', nav_loc_sg:'实龙岗花园', nav_loc_or:'乌节路',
      nav_learn:'了解更多', nav_story:'我们的故事', nav_phil:'我们的理念',
      nav_tech:'技术与设备', nav_reviews:'客户评价', nav_blog:'美容博客',
      nav_faq:'常见问题', nav_contact:'联系我们', btn_book:'立即预约',
      // Footer
      ft_tagline:'深耕新加坡逾10年，专注面部与全身疗程护理。',
      ft_col_treat:'疗程项目', ft_col_locs:'门店地址',
      ft_col_company:'公司介绍', ft_col_contact:'联系我们',
      ft_hrs1:'每日：上午10点 – 晚上10点30分（须预约）',
      ft_copy:'© 2026 EC Centre. 版权所有。',
      ft_terms:'条款与条件', ft_privacy:'隐私政策',
      // Homepage
      h_badge:'★ 新加坡第一多奖美容诊所',
      h_title:'<span style="font-size:.45em;font-weight:600;letter-spacing:.5px">新加坡第一家功效性养生</span><br>美丽肌肤<br><em>从这里开始</em>',
      h_sub:'深耕新加坡逾10年，专注面部与全身疗程护理。',
      h_s_yrs:'年经验', h_s_cli:'满意客户',
      h_s_loc:'诊所地点', h_s_aw:'获奖项目',
      h_btn1:'探索我们的疗程', h_btn2:'免费咨询',
      tr_tag:'我们的专长', tr_title:'我们的疗程',
      tr_sub:'探索我们全面的先进美容疗程系列，专为您提供从首次疗程即可见效的美容解决方案。',
      t1_h:'头眼舒缓疗程', t1_p:'专业头部护理与眼部舒缓疗程，平衡身心，焕活肌肤，重拾最佳状态。', t1_a:'探索',
      t2_h:'桃花面部疗程', t2_p:'温和面部护理，包括柔润焕肤、润养保湿、柔顺肌理、深层锁水和天然舒缓疗程。', t2_a:'探索',
      t3_h:'全身泥灸疗程', t3_p:'全身泥灸温热疗程，舒缓僵硬肌肉，放松疲倦四肢，恢复全身活力。', t3_a:'探索',
      t4_h:'纤体塑形', t4_p:'专业纤体塑形疗程，雕塑、收紧和紧致身体线条，重拾自信完美身材。', t4_a:'探索',
      pg_tag:'招牌系列', pg_title:'我们的招牌疗程',
      pg_sub:'专业精心设计的综合疗程方案，为您带来全面、持久的美丽效果。',
      p1_h:'头眼联护套餐', p1_p:'一站式双项放松——专业头部护理与眼部疗程联合，全面舒缓身心疲惫。',
      p2_h:'桃花焕颜面部疗程', p2_p:'全套面部养护课程，涵盖亮肤、补水、柔顺和塑颜，焕发透亮光彩。',
      p3_h:'全身泥灸疗程', p3_p:'全身温热泥灸护理，深度放松肌肉，舒缓疲倦四肢，全面恢复身心健康。',
      p4_h:'纤体塑形方案', p4_p:'针对性纤体塑形方案，雕塑身体轮廓，重塑紧致自信的完美曲线。',
      p5_h:'全身放松套餐', p5_p:'头部、眼部、面部与身体疗程四合一，尽享奢华全身放松体验。',
      ab_tag:'我们的历程', ab_title:'始终站在医学美容的前沿',
      ab_p:'由先驱医生创立，依托BVA科技支持，EstheClinic在医学美容前沿耕耘超过二十年。我们将医疗级技术与专业护理相结合，安全有效、无痛地为您提供可见且持久的美丽效果。',
      ab_f1h:'医疗级技术', ab_f1p:'我们仅使用经临床验证、获准用于美容的最先进技术。',
      ab_f2h:'专业医疗团队', ab_f2p:'我们的专业团队接受最高国际标准的培训。',
      ab_f3h:'个性化护理', ab_f3p:'每个疗程方案都根据您的独特肤质和目标全面定制。',
      ab_btn:'了解我们的故事',
      wy_tag:'为何选择我们', wy_title:'新加坡最受信赖的美容诊所',
      w1h:'新加坡第一美容诊所', w1p:'连年荣获新加坡顶尖美容诊所多项权威奖项认可。',
      w2h:'医疗级技术', w2p:'我们仅使用经临床验证的医疗级技术，确保安全、高效的疗程效果。',
      w3h:'无痛，只有效果', w3p:'我们所有疗程均设计为舒适无痛，为您提供最佳体验。',
      w4h:'首次疗程即见效果', w4p:'从您的首次疗程就能感受到不同——可见、可量化的效果有保障。',
      w5h:'20年专业经验', w5p:'二十年医学美容专业经验，深受超过20,000名满意客户信赖。',
      aw_tag:'荣誉认可', aw_title:'屡获殊荣的卓越品质',
      aw_sub:'荣获新加坡最权威美容与生活杂志的认可。',
      rv_tag:'客户评价', rv_title:'客户怎么说', rv_sub:'超过20,000名满意客户，口碑不断扩大。',
      md_tag:'媒体报道', md_title:'媒体刊载',
      lc_tag:'找到我们', lc_title:'我们的门店', lc_sub:'遍布新加坡各地，方便您就近选择。',
      lc_h1:'周一至周五：上午10点 – 晚上8点', lc_h2:'周六：上午9点 – 下午6点', lc_h3:'周日及公共假期：休息',
      lc_call:'致电', lc_view:'查看门店',
      nw_badge:'专属优惠', nw_h2:'首次疗程享受5折优惠',
      nw_p:'订阅我们的通讯，即可获得首次疗程独家5折优惠，以及最新美容贴士和促销信息。',
      nw_ph1:'您的姓名', nw_ph2:'您的电子邮件地址',
      nw_btn:'领取我的5折优惠', nw_priv:'我们尊重您的隐私，绝不发送垃圾邮件。',
      ct_tag:'联系我们', ct_title:'预约咨询',
      ct_sub:'准备好开始您的美丽之旅了吗？立即联系我们，享受免费咨询。',
      ct_call:'致电我们', ct_wa:'WhatsApp', ct_email:'电子邮件', ct_hrs:'营业时间',
      ct_hrs_v:'每日：上午10点 – 晚上10点30分（须预约）',
      fl_name:'姓名 *', fl_email:'电子邮件 *', fl_phone:'电话',
      fl_loc:'首选门店', fl_treat:'疗程兴趣', fl_msg:'留言',
      fl_submit:'发送消息', fl_sel_c:'选择诊所', fl_sel_t:'选择疗程',
      btn_consult:'预约免费咨询',
      btn_write_review:'★  撰写评价',
      badge_text:'无需配套',
      // Reviews carousel
      rv_title:'客户真实评价',
      rv_sub:'来自新加坡各地客户的真实体验分享',
      rv1_text:'"头眼舒缓疗程非常放松，做完第一次紧张性头痛就消失了。治疗师技术高超、贴心周到——真的是个隐藏宝地！"',
      rv1_name:'Sarah T.', rv1_role:'市场经理',
      rv2_text:'"新加坡最好的面部疗程！肌肤水润光泽，效果持续数周。团队认真了解肌肤问题，定制了完美护理方案。"',
      rv2_name:'Michelle L.', rv2_role:'教师',
      rv3_text:'"身体泥浆疗法真的太好了！温暖舒缓，全身肌肉完全放松，感觉焕然一新。一定会再来！"',
      rv3_name:'Jennifer K.', rv3_role:'创业者',
      rv4_text:'"做了3次面部护理后肤色明显改善，效果真实可见。团队非常专业，每次到访都热情友好。"',
      rv4_name:'Rachel W.', rv4_role:'会计师',
      rv5_text:'"生日犒劳自己来这里，体验超出所有预期！环境宁静，工作人员体贴周到。强烈推荐！"',
      rv5_name:'Amanda C.', rv5_role:'人力资源主管',
      rv6_text:'"工作人员专业且知识丰富，开始前认真了解我的需求。效果立竿见影，绝佳体验——满分推荐！"',
      rv6_name:'David L.', rv6_role:'软件工程师',
      // About section float badge
      ab_badge_lbl:'年卓越经验',
      // Learn more link
      lm:'了解更多 →',
      // Form placeholders
      ph_name:'您的姓名', ph_email:'您的电子邮件',
      ph_phone:'+65 9000 0000', ph_msg:'请告诉我们您的肌肤问题…',
      // Form select misc
      opt_other:'其他',
      // Reviews (Chinese)
      rv1:'"我在EstheClinic做激光脱毛已经两年了，效果令人难以置信——我几乎完全脱毛了，员工非常专业和贴心！"',
      rv2:'"即刻年轻疗程彻底改变了我的肌肤。同事们不断问我是否做了什么——效果非常自然美丽，强烈推荐！"',
      rv3:'"终于找到一家真正了解我肌肤问题的诊所。痘痘护理疗程几次后就清透了，真希望早点来！"',
      rv4:'"作为男性，我起初对来美容诊所有点紧张，但团队让我感到非常舒适。脱毛疗程无痛且效果显著！"',
      rv5:'"身体护理疗程物有所值。橘皮纹明显减少，肌肤感觉更紧实光滑，团队非常专业！"',
      rb1:'丹戎巴葛分店', rb2:'荷兰村分店',
      rb3:'乌节路分店', rb4:'东海岸分店', rb5:'实龙岗花园分店',
    }
  };

  /* ========================================================
     2. SUB-PAGE TRANSLATIONS
     Structure: { selector: [ [zhText, isHTML?], ... ] }
     Arrays match element order on the page (nth index).
     ======================================================== */
  const PAGES = {

    /* ---------- PERMANENT HAIR REMOVAL -------------------- */
    'permanent-hair-removal/face': {
      '.page-hero h1':              [['面部永久脱毛']],
      '.page-hero > .container > p':[['采用先进无痛激光技术，永久去除上唇、下颌、鬓角、脸颊、额头和颈部的多余毛发，告别繁复脱毛护理。']],
      '.section__tag':              [['我们的专长'],['永久脱毛'],['优势'],['疗程流程'],['常见问题'],['开始体验']],
      '.section__title':            [['面部永久脱毛——彻底告别烦恼'],['主要优势'],['疗程流程'],['常见问题'],['开始您的无毛之旅']],
      '.intro-grid > div > p':      [['EstheClinic面部脱毛采用Soprano ICE Platinum二极管激光，这是目前最先进的无痛脱毛技术。激光能量深入毛囊根部，永久性阻止毛发生长，让您的肌肤长久保持光滑。经过6–8次疗程，可实现90%以上的永久性毛发减少。']],
      '.benefit-card h3':           [['永久效果'],['完全无痛'],['告别内生发'],['均匀肤色'],['适合所有肤质']],
      '.benefit-card p':            [['经过6–8次疗程，永久减少90%以上的毛发，让您享受持久光滑。'],['Soprano ICE Platinum技术采用独特滑行法，疗程过程中几乎无痛感，全程舒适。'],['激光精准破坏毛囊，有效防止内生发的形成，远离红肿和发炎。'],['告别刮毛引起的肤色不均，让肌肤重获自然亮丽。'],['技术适用于所有肤色，包括较深的亚洲肤色，安全高效。']],
      '.step__body h3':             [['免费咨询'],['皮肤评估与敏感测试'],['激光疗程'],['维护检查']],
      '.step__body p':              [['我们的专家团队将评估您的肤质和毛发类型，设计最适合您的个性化脱毛方案。'],['进行详细的皮肤分析和敏感测试，确保治疗安全有效，并确定最佳激光参数。'],['每隔4–6周进行一次疗程，每次约15–30分钟。大多数客户在6–8次后即可达到永久效果。'],['疗程结束后定期随访，评估效果并处理可能出现的零星毛发生长。']],
      '.faq-a p':                   [['完全无痛。Soprano ICE Platinum采用独特的冷冻冷却技术，疗程过程中您只会感受到轻微的温热感，而非传统激光的灼烧感。'],['大多数客户需要6–8次疗程，每次间隔4–6周，以追踪所有处于不同生长周期的毛囊。具体次数因个人毛发密度和肤质而异。'],['可以。Soprano ICE Platinum技术专为所有肤色设计，包括较深的亚洲肤色，是目前市场上最安全、最有效的脱毛系统之一。'],['完全安全。我们的激光技术获FDA认证，专为面部使用设计，精准针对毛囊而不损伤周围皮肤。'],['几乎无需停工期。疗程后皮肤可能出现轻微泛红，通常在数小时内消退，您可立即恢复日常活动。']],
      '.page-cta h2':               [['准备好开始您的无毛之旅？']],
      '.page-cta p':                [['立即预约免费咨询，享受首次疗程5折优惠。专业团队随时为您服务。']],
    },

    'permanent-hair-removal/body': {
      '.page-hero h1':              [['身体永久脱毛']],
      '.page-hero > .container > p':[['告别背部、胸部、手臂等全身毛发烦恼，采用先进无痛激光技术，享受永久光滑肌肤。']],
      '.section__title':            [['身体脱毛——全身永久光滑'],['主要优势'],['疗程流程'],['常见问题'],['告别身体毛发烦恼']],
      '.benefit-card h3':           [['全年光滑无毛'],['告别剃毛伤口'],['节省时间'],['增强自信'],['全身适用']],
      '.benefit-card p':            [['无需再担心背部、胸部或手臂的毛发问题，全年保持光滑肌肤。'],['彻底告别剃毛刀引起的割伤、红肿和内生发，让肌肤保持健康光滑。'],['告别每周剃毛的繁琐程序，节省宝贵时间，专注于更重要的事。'],['穿着无袖和背心时更加自信，无需担心毛发问题。'],['可处理背部、胸部、肩部、手臂、腹部等全身任意部位。']],
      '.step__body h3':             [['免费咨询'],['全身评估'],['激光疗程'],['复查与维护']],
      '.step__body p':              [['专家为您评估全身毛发状况，制定个性化身体脱毛方案。'],['详细记录需处理的身体区域，确定最佳治疗顺序和参数设置。'],['每次疗程根据处理面积需时30–90分钟，每隔4–6周进行一次，共需6–10次。'],['疗程结束后跟踪效果，确保所有目标区域均达到理想的永久脱毛效果。']],
      '.faq-a p':                   [['身体脱毛通常需要6–10次疗程，因为身体不同部位的毛发生长周期各不相同，需要覆盖所有毛囊的生长阶段。'],['完全不痛。我们的Soprano ICE技术即使处理背部较粗的毛发也保持舒适无痛。'],['每次疗程时长取决于处理面积：小面积（如腋下）约15分钟，全背部约45–60分钟，全身可能需要90分钟。'],['建议疗程后24小时内避免剧烈运动，以防止过度出汗刺激皮肤。之后可完全恢复正常运动。']],
      '.page-cta h2':               [['告别身体毛发烦恼']],
      '.page-cta p':                [['预约免费咨询，了解最适合您的身体脱毛方案，首次疗程享受5折优惠。']],
    },

    'permanent-hair-removal/bikini': {
      '.page-hero h1':              [['比基尼永久脱毛']],
      '.page-hero > .container > p':[['精准、舒适、私密——为比基尼线、高比基尼及全面护理提供永久脱毛解决方案。']],
      '.section__title':            [['比基尼脱毛——自信享受每个夏天'],['主要优势'],['疗程流程'],['常见问题'],['开始您的比基尼脱毛之旅']],
      '.benefit-card h3':           [['自在穿着比基尼'],['告别剃毛红疹'],['卫生舒适'],['精准控制'],['持久效果']],
      '.benefit-card p':            [['无论任何季节，都能自信穿着比基尼或泳装，无需临时脱毛的困扰。'],['告别剃毛引起的红疹、内生发和皮肤刺激，保持肌肤光滑健康。'],['减少细菌滋生，保持私密部位卫生，减少异味。'],['可精准选择处理范围，从比基尼线到全面护理，完全按照您的需求定制。'],['经过6–10次疗程，实现永久性毛发减少，长久保持光洁。']],
      '.step__body h3':             [['私密咨询'],['个人化方案'],['疗程'],['效果跟踪']],
      '.step__body p':              [['在完全私密的环境中，与专业治疗师讨论您的需求和期望，制定最适合您的方案。'],['根据您选择的脱毛范围（比基尼线、高比基尼或全面），设计个性化治疗方案。'],['每次疗程约20–30分钟，采用无痛激光技术，舒适完成整个过程。'],['疗程结束后定期跟踪效果，确保达到理想的永久脱毛目标。']],
      '.faq-a p':                   [['大多数客户需要6–10次疗程，间隔4–6周，以覆盖所有处于不同生长阶段的毛囊。'],['Soprano ICE技术的冷冻冷却系统使疗程非常舒适，私密部位虽然较为敏感，但技术会确保整个过程尽量舒适。'],['两次疗程之间建议避免蜡脱、拔毛，可以剃毛。疗程前24小时请剃除目标区域的毛发。'],['疗程前24小时请剃毛，穿着宽松舒适的内裤，避免使用任何刺激性产品。']],
      '.page-cta h2':               [['准备好自信享受每个夏天？']],
      '.page-cta p':                [['立即预约免费私密咨询，了解最适合您的比基尼脱毛方案。']],
    },

    'permanent-hair-removal/underarm': {
      '.page-hero h1':              [['腋下永久脱毛']],
      '.page-hero > .container > p':[['最受欢迎的脱毛疗程——快速、无痛、永久告别腋下毛发，每次疗程仅需15分钟。']],
      '.section__title':            [['腋下脱毛——最快速、最受欢迎的选择'],['主要优势'],['疗程流程'],['常见问题'],['立即体验腋下永久脱毛']],
      '.benefit-card h3':           [['永久告别腋毛'],['改善腋下肤色'],['减少异味'],['快速疗程'],['节省日常护理时间']],
      '.benefit-card p':            [['经过6–8次疗程，永久去除腋下毛发，无需再频繁剃毛。'],['告别剃毛引起的腋下色素沉着，让腋下肌肤逐渐恢复自然亮丽的颜色。'],['减少细菌滋生，有效降低腋下异味，让您全天保持清爽。'],['每次疗程仅需约15分钟，是午休时间就能完成的美丽约会。'],['不再需要每天剃毛，节省时间，简化日常护理程序。']],
      '.step__body h3':             [['咨询与评估'],['定制方案'],['快速疗程'],['维护跟踪']],
      '.step__body p':              [['评估您的腋下皮肤状况和毛发密度，确定最适合的激光参数。'],['根据您的肤色和毛发特征，设计最优化的脱毛方案。'],['每次疗程仅需15分钟，完全无痛，疗程结束后可立即恢复正常活动。'],['疗程结束后定期跟踪，确保腋下毛发得到彻底、永久的去除。']],
      '.faq-a p':                   [['每次疗程仅需约15分钟，是所有脱毛部位中最快速的之一，非常适合繁忙的都市人。'],['是的！激光脱毛会减少剃毛引起的摩擦和色素沉着，随着疗程的进行，腋下肤色会逐渐改善变亮。'],['大多数客户在3–4次疗程后就能看到显著减少，完整的6–8次疗程后可实现90%以上的永久减少。'],['疗程前24小时请剃除腋下毛发，当天避免使用止汗剂或香体剂，穿着宽松的衣物。']],
      '.page-cta h2':               [['准备好告别腋下毛发烦恼？']],
      '.page-cta p':                [['预约免费咨询，首次疗程享受5折优惠。每次仅需15分钟，永久解决腋毛问题。']],
    },

    'permanent-hair-removal/leg': {
      '.page-hero h1':              [['腿部永久脱毛']],
      '.page-hero > .container > p':[['告别刮腿的繁琐，采用先进激光技术实现全腿永久光滑，随时穿短裙、泳装都充满自信。']],
      '.section__title':            [['腿部脱毛——全年光滑无忧'],['主要优势'],['疗程流程'],['常见问题'],['拥有梦想中的光滑美腿']],
      '.benefit-card h3':           [['全年光滑双腿'],['告别顽固茬毛'],['无剃毛伤口'],['节省大量时间'],['随时穿短裙']],
      '.benefit-card p':            [['无需再为腿毛烦恼，全年保持光滑细腻的双腿。'],['彻底消除顽固的腿部茬毛，让肌肤摸起来真正光滑如丝。'],['告别剃毛刀引起的割伤、红点和内生发，让双腿保持健康光泽。'],['不再需要每隔几天就刮腿，每周节省数十分钟的护理时间。'],['无论何时何地，都能自信地穿上短裙、短裤或泳装。']],
      '.step__body h3':             [['咨询'],['腿部评估'],['分区激光疗程'],['效果评估']],
      '.step__body p':              [['专家了解您的腿部毛发状况和需求，推荐最合适的处理范围（全腿、半腿或小腿）。'],['评估腿部皮肤和毛发特征，制定最有效的激光参数和疗程计划。'],['每次疗程根据处理范围需时30–60分钟，共需6–10次，间隔4–6周。'],['跟踪每次疗程后的效果，适时调整参数，确保最终达到永久脱毛目标。']],
      '.faq-a p':                   [['全腿脱毛通常包括大腿和小腿，也可选择仅做半腿（膝盖以下）或仅膝盖部分，价格因处理面积而异。'],['腿部脱毛通常需要6–10次疗程，因为腿部毛囊数量多，需要覆盖不同生长周期的毛发。'],['疗程期间建议用剃刀刮毛（而非蜡脱或拔毛），这样不会干扰毛囊，确保激光治疗的有效性。'],['全腿疗程（包括大腿和小腿）每次约需45–60分钟，仅小腿约需20–30分钟。']],
      '.page-cta h2':               [['拥有梦想中的光滑美腿']],
      '.page-cta p':                [['立即预约免费咨询，了解腿部脱毛方案，首次疗程享受5折优惠。']],
    },

    'permanent-hair-removal/mens': {
      '.page-hero h1':              [['男士永久脱毛']],
      '.page-hero > .container > p':[['越来越多新加坡男性选择激光脱毛。背部、胸部、胡须线条——专业、自信、永久整洁。']],
      '.section__title':            [['男士脱毛——专业塑造精英形象'],['主要优势'],['疗程流程'],['常见问题'],['塑造您的精英形象']],
      '.benefit-card h3':           [['专业精英形象'],['告别背部毛发'],['干净整洁的胡须线'],['运动健儿之选'],['量身定制方案']],
      '.benefit-card p':            [['整洁的形象提升职场和社交自信，在商务和休闲场合都展现最佳状态。'],['解决许多男性最困扰的背部和肩部多余毛发，穿着T恤和游泳时更加自信。'],['精准处理颈部和脸颊多余毛发，让胡须轮廓更加清晰有型。'],['运动员和健身爱好者的热门选择，减少毛发带来的摩擦和不适。'],['根据男性特有的毛发密度和质地，我们的方案专为男士需求量身设计，可能需要6–12次疗程。']],
      '.step__body h3':             [['男士专属咨询'],['毛发与肤质分析'],['男士激光疗程'],['效果跟踪']],
      '.step__body p':              [['在轻松舒适的环境中，与专业治疗师讨论您的需求，没有任何尴尬，只有专业建议。'],['男性毛发通常比女性更粗更密，我们会仔细分析毛发特征，制定更强效的治疗方案。'],['男性通常需要6–12次疗程，因为男性激素水平使毛发更为顽固，但效果同样显著持久。'],['定期复查确保所有目标区域达到预期效果，适时补充疗程维持最佳状态。']],
      '.faq-a p':                   [['当然适合！越来越多的新加坡男性选择激光脱毛来处理背部、胸部、颈部等部位，这已经非常普遍和被接受。'],['背部脱毛通常需要8–12次疗程，因为背部毛发较粗，且面积较大，需要更多次数才能覆盖所有毛囊。'],['男性毛发通常较粗，激光能量设置会相应更高，但Soprano ICE技术确保即使是较粗的毛发处理也保持舒适无痛。'],['可以。全身脱毛方案可按需定制，按优先级分区处理，也可选择套餐组合。']],
      '.page-cta h2':               [['塑造您的精英男士形象']],
      '.page-cta p':                [['预约免费男士咨询，了解最适合您的个性化脱毛方案，首次疗程享受5折优惠。']],
    },

    /* ---------- FACE TREATMENTS --------------------------- */
    'face-treatments/pigmentation-scars': {
      '.page-hero h1':              [['色斑与疤痕修复']],
      '.page-hero > .container > p':[['针对老年斑、晒斑、黄褐斑、痘印及疤痕，采用Q开关激光和IPL技术，重现均匀亮丽肤色。']],
      '.section__title':            [['色斑修复——重现均匀亮丽肤色'],['主要优势'],['疗程流程'],['常见问题'],['重现您的亮丽肤色']],
      '.benefit-card h3':           [['淡化色斑'],['改善疤痕'],['均匀肤色'],['提亮肤色'],['长久效果']],
      '.benefit-card p':            [['有效淡化老年斑、晒斑、黄褐斑和痘印，让肌肤重焕自然光彩。'],['显著改善痘疤和其他类型疤痕的外观，使肌肤更加平滑细腻。'],['解决肤色不均问题，实现全脸均匀、自然的肤色。'],['激光能量刺激皮肤深层更新，让整体肤色更加明亮通透。'],['适当护理维护下，效果可持续数年，让您长久享受亮丽肌肤。']],
      '.step__body h3':             [['肌肤分析与咨询'],['定制化治疗方案'],['激光疗程'],['肌肤复原护理']],
      '.step__body p':              [['专业皮肤分析仪详细检测您的色斑类型、深度和范围，制定最精准的治疗方案。'],['根据色斑性质选择最合适的技术组合：Q开关激光针对深层色素，IPL用于浅层色斑，确保最佳效果。'],['疗程通常每2–4周进行一次，每次约30–45分钟，多数客户需要4–8次以获得最佳效果。'],['疗程后提供专业修复护理建议，包括防晒和肌肤修复产品，确保效果最大化且色斑不易复发。']],
      '.faq-a p':                   [['色斑通常是由紫外线照射、激素变化（如妊娠或避孕药）、遗传因素或皮肤炎症后遗留的色素沉着引起的。'],['根据色斑的类型和严重程度，通常需要4–8次疗程。浅层晒斑可能更快改善，深层黄褐斑可能需要更多次数。'],['是的，我们的技术专为亚洲肤色设计，可以安全有效地处理各种肤色的色斑问题。'],['即使治疗后色斑得到改善，若不注意防晒，色斑可能复发。我们会提供完整的防护和维护方案。']],
      '.page-cta h2':               [['重现均匀亮丽的完美肤色']],
      '.page-cta p':                [['预约免费肌肤分析，了解最适合您的色斑修复方案，首次疗程享受5折优惠。']],
    },

    'face-treatments/anti-aging': {
      '.page-hero h1':              [['抗衰老面部护理']],
      '.page-hero > .container > p':[['借助射频、超声及胶原蛋白诱导技术，无需手术，有效对抗细纹、皱纹和肌肤松弛，重现年轻风采。']],
      '.section__title':            [['抗衰老——重返年轻的科学方法'],['主要优势'],['疗程流程'],['常见问题'],['重现您的年轻风采']],
      '.benefit-card h3':           [['淡化细纹与皱纹'],['紧致提升肌肤'],['促进胶原蛋白再生'],['自然年轻效果'],['零停工期']],
      '.benefit-card p':            [['有效减少额头、眼角和嘴角的细纹和皱纹，让肌肤重现年轻光滑。'],['增强肌肤弹性，提升松弛的面部轮廓，重现紧致饱满的年轻线条。'],['刺激深层胶原蛋白和弹性蛋白的自然生成，从内而外改善肌肤质感。'],['效果自然，不影响面部表情，让周围的人注意到您的年轻变化，却察觉不到做过任何处理。'],['无需手术，无需停工，疗程后即可恢复日常生活和工作。']],
      '.step__body h3':             [['年龄肌肤评估'],['技术选择与方案制定'],['抗衰老疗程'],['胶原蛋白重建阶段']],
      '.step__body p':              [['通过先进的皮肤分析技术评估您的肌肤年龄、胶原蛋白含量和松弛程度，制定精准方案。'],['根据您的肌肤状况选择最合适的技术组合：射频用于紧致，HIFU用于提升，胶原诱导用于全面修复。'],['每次疗程约45–60分钟，多数客户需要3–6次，每次间隔4周，以获得最佳持久效果。'],['胶原蛋白重建是渐进过程，疗程后2–3个月内效果会持续改善，最终效果显著且自然持久。']],
      '.faq-a p':                   [['任何开始注意到细纹、松弛或肌肤弹性下降的年龄都可以开始。一般来说，25岁以后开始预防性护理，35岁后进行针对性修复效果最佳。'],['根据技术不同，效果可持续12–24个月。建议每年进行1–2次维护疗程，以保持最佳状态。'],['射频疗程几乎无痛感，只有轻微温热感。部分胶原诱导疗程可能有轻微不适，但总体非常耐受。'],['多数客户在3–6次疗程后看到显著效果，部分技术如HIFU一次即可看到明显改善。']],
      '.page-cta h2':               [['重现属于您的年轻风采']],
      '.page-cta p':                [['预约免费肌肤评估，让我们为您制定个性化的抗衰老方案，首次疗程享受5折优惠。']],
    },

    'face-treatments/skin-tightening': {
      '.page-hero h1':              [['面部皮肤紧致提升']],
      '.page-hero > .container > p':[['采用HIFU超声波聚焦技术，无需手术刀，有效提升松弛的脸颊、下颌线和颈部，塑造清晰年轻的面部轮廓。']],
      '.section__title':            [['皮肤紧致——非手术提升的终极方案'],['主要优势'],['疗程流程'],['常见问题'],['重塑您的年轻轮廓']],
      '.benefit-card h3':           [['提升松弛轮廓'],['重塑下颌线'],['非手术提升'],['效果持久'],['针对SMAS层']],
      '.benefit-card p':            [['有效提升松弛的脸颊和颧骨区域，重现饱满年轻的面部轮廓。'],['收紧下颌线，改善双下巴，塑造清晰有型的下颌轮廓。'],['无需手术、无需切口、无需麻醉，安全舒适地实现面部提升效果。'],['效果可持续12–18个月，远超传统护肤品，是性价比最高的非手术提升方案。'],['HIFU技术能量直达皮肤深层的SMAS（表情肌腱膜系统），这是传统护肤品无法触及的层次，效果深入持久。']],
      '.step__body h3':             [['面部松弛评估'],['治疗区域标记'],['HIFU超声提升疗程'],['胶原合成恢复期']],
      '.step__body p':              [['专业分析您面部松弛程度和轮廓特征，确定需要重点提升的区域。'],['精准标记治疗区域，制定个性化的超声波聚焦深度和能量参数。'],['疗程约需60–90分钟，超声波能量精准作用于皮肤深层，刺激胶原蛋白的大量新生。'],['疗程后2–3个月内胶原蛋白持续新生，效果逐步显现并在3个月时达到最佳，随后效果可维持12–18个月。']],
      '.faq-a p':                   [['HIFU（高强度聚焦超声）是一种将超声波能量精准聚焦于皮肤深层（SMAS层）的技术，通过产生热凝固点刺激胶原蛋白新生，实现非手术提升效果。'],['效果通常可持续12–18个月。建议每年进行一次维护疗程，以保持持续年轻的面部轮廓。'],['疗程中可能会感受到一定程度的温热和轻微不适，特别是骨骼突出部位。多数客户描述疗程是可以耐受的，疗程后不适感会迅速消退。'],['单次HIFU疗程即可看到明显效果，大多数客户1–2次即可达到理想效果，效果在1–3个月内持续改善。']],
      '.page-cta h2':               [['重塑您清晰年轻的面部轮廓']],
      '.page-cta p':                [['预约免费面部评估，了解HIFU皮肤提升如何帮助您，首次疗程享受5折优惠。']],
    },

    'face-treatments/acne-oily-skin': {
      '.page-hero h1':              [['痘痘与油性肌肤护理']],
      '.page-hero > .container > p':[['针对活跃性痘痘、黑头、毛孔粗大和过度出油，采用IPL、LED和专业护理技术，实现清透肌肤。']],
      '.section__title':            [['痘痘护理——清透肌肤的专业解决方案'],['主要优势'],['疗程流程'],['常见问题'],['告别痘痘，拥抱清透肌肤']],
      '.benefit-card h3':           [['有效清除痘痘'],['控制油脂分泌'],['收缩毛孔'],['预防复发'],['消除痘印']],
      '.benefit-card p':            [['快速有效地清除各类型痘痘，包括黑头、白头、丘疹和囊性痘，还您清透肌肤。'],['从根源调节油脂分泌，减少出油，改善T区油光，让肌肤保持清爽平衡。'],['射频能量收缩粗大毛孔，让肌肤纹理更加细腻光滑。'],['通过科学的护理方案，建立肌肤的天然防御机制，从根本上预防痘痘的未来爆发。'],['专业治疗有效淡化痘印和痘疤引起的色素沉着，还原均匀健康的肤色。']],
      '.step__body h3':             [['肤质分析'],['个性化护理方案'],['痘痘专业疗程'],['清透肌肤维护计划']],
      '.step__body p':              [['详细分析您的痘痘类型、严重程度和成因，评估油脂分泌水平和毛孔状况。'],['根据痘痘成因（细菌性、激素性、堵塞性），选择最有效的技术组合和护理方案。'],['疗程通常每1–2周进行一次，每次约30–45分钟，6–8次为一个完整疗程，可同时处理痘痘和痘印。'],['建立完整的日常护肤和饮食生活方式建议，帮助长期维持清透肌肤，预防痘痘复发。']],
      '.faq-a p':                   [['疗程效果因个人情况而异。多数客户在2–3次疗程后能看到明显改善，完整疗程结束后通常可实现持续的清透效果。'],['是的！我们有专门针对敏感性和油痘皮的温和方案，确保治疗过程中不会过度刺激或损伤肌肤屏障。'],['可以，且效果更佳。痘痘治疗与痘印消除可以结合进行，我们会根据您的具体情况设计最优的综合方案。'],['除了专业疗程，日常清洁、控油、规律作息和均衡饮食对于改善油性和痘痘肌肤同样非常重要，我们会给予详细的生活方式指导。']],
      '.page-cta h2':               [['告别痘痘，拥抱清透自信肌肤']],
      '.page-cta p':                [['预约免费肤质分析，了解最适合您的痘痘护理方案，首次疗程享受5折优惠。']],
    },

    'face-treatments/dry-skin': {
      '.page-hero h1':              [['干性肌肤深度补水']],
      '.page-hero > .container > p':[['通过水光针、氧气导入和深度保湿技术，从根本解决肌肤干燥、脱皮和暗沉问题，重现水润光泽。']],
      '.section__title':            [['干性肌肤护理——深度补水重焕光泽'],['主要优势'],['疗程流程'],['常见问题'],['重焕肌肤水润光彩']],
      '.benefit-card h3':           [['深层锁水保湿'],['水润丰盈肌肤'],['改善干纹'],['修复肌肤屏障'],['自然光泽感']],
      '.benefit-card p':            [['专业补水疗程将水分锁定在肌肤深层，长效保湿，解决干燥问题。'],['肌肤立刻变得水润饱满，干纹和紧绷感明显改善。'],['持续保湿疗程有效减少细小干纹，预防更深皱纹的形成。'],['修复受损的肌肤屏障，增强肌肤对外界刺激的防御能力，减少水分流失。'],['水润肌肤自然散发出健康光泽，让您的气色更加亮丽动人。']],
      '.step__body h3':             [['肌肤水分检测'],['个性化保湿方案'],['深度补水疗程'],['维护方案']],
      '.step__body p':              [['使用专业仪器测量肌肤水分含量和屏障功能，精确评估缺水程度和成因。'],['根据干燥原因（缺油型、缺水型或混合型），设计最有效的补水和修护方案。'],['疗程结合水光针导入、氧气注入和深度保湿精华，每次约45分钟，通常4–6次为一个疗程。'],['建立完整的日常保湿护肤程序，配合定期维护疗程，帮助肌肤长期保持水润健康状态。']],
      '.faq-a p':                   [['干性肌肤通常由遗传因素、年龄增长、环境因素（如空调和干燥气候）、过度清洁或使用刺激性护肤品引起，与新加坡常见的室内干燥环境密切相关。'],['每次疗程后肌肤会立刻感觉更水润柔软，完整疗程的保湿效果通常可维持2–3个月，配合日常护理可进一步延长。'],['建议每1–2个月进行一次维护疗程，配合日常使用含有透明质酸的护肤品，帮助长期维持水润状态。'],['干性肌肤通常需要长期的护理和管理，但通过专业疗程加上正确的日常护理，可以显著改善肌肤的保水能力。']],
      '.page-cta h2':               [['重焕肌肤水润光彩']],
      '.page-cta p':                [['预约免费肌肤水分检测，了解最适合您的保湿方案，首次疗程享受5折优惠。']],
    },

    /* ---------- BODY TREATMENTS --------------------------- */
    'body-treatments/cellulite-removal': {
      '.page-hero h1':              [['橘皮纹（蜂窝纹）去除']],
      '.page-hero > .container > p':[['采用声波治疗、真空射频和淋巴引流技术，有效改善大腿、臀部和腹部的橘皮纹，重现光滑紧致肌肤。']],
      '.section__title':            [['橘皮纹治疗——还您光滑紧致身体'],['主要优势'],['疗程流程'],['常见问题'],['告别橘皮纹']],
      '.benefit-card h3':           [['改善肌肤质地'],['促进血液循环'],['减少皮下脂肪团'],['紧致皮肤'],['长效维持']],
      '.benefit-card p':            [['显著改善橘皮纹引起的凹凸不平肌肤质地，让皮肤重现光滑细腻。'],['促进目标区域的血液和淋巴循环，帮助排除积聚的毒素和多余液体。'],['破坏皮下脂肪纤维隔，减少脂肪团的形成，从根本改善橘皮纹问题。'],['射频能量同时收紧皮肤，使橘皮纹区域的皮肤更加紧致有弹性。'],['配合健康生活方式，治疗效果可长期维持，预防橘皮纹再次加重。']],
      '.step__body h3':             [['身体评估'],['橘皮纹区域标记'],['综合技术疗程'],['淋巴引流维护']],
      '.step__body p':              [['评估橘皮纹的严重程度和分布区域，分析皮下脂肪结构，制定最有效的治疗方案。'],['精准标记大腿内外侧、臀部、腹部等目标区域，制定分区治疗计划。'],['结合声波治疗和射频技术同步处理，每次疗程约60分钟，通常需要8–12次疗程。'],['专业淋巴引流按摩有效提升治疗效果，帮助排除毒素，加速橘皮纹改善过程。']],
      '.faq-a p':                   [['橘皮纹（蜂窝纹）可以显著改善，但完全消除可能需要持续的治疗和维护。多数客户在完成一个疗程后可看到40–60%的明显改善。'],['通常需要8–12次疗程，每周1–2次，以获得最佳效果。之后建议每月进行1次维护疗程。'],['任何出现橘皮纹的部位均可治疗，包括大腿内外侧、臀部、腹部和上臂。'],['规律运动（特别是有氧运动和力量训练）、多喝水、均衡饮食和避免久坐都有助于提升和维持治疗效果。']],
      '.page-cta h2':               [['告别橘皮纹，重现光滑紧致肌肤']],
      '.page-cta p':                [['预约免费身体评估，了解最适合您的橘皮纹治疗方案，首次疗程享受5折优惠。']],
    },

    'body-treatments/sagging-skin': {
      '.page-hero h1':              [['松弛肌肤紧致疗程']],
      '.page-hero > .container > p':[['采用射频和超声波技术，非手术紧致手臂、腹部、大腿等部位的松弛皮肤，重现年轻紧致的身体线条。']],
      '.section__title':            [['身体皮肤紧致——非手术提升塑形'],['主要优势'],['疗程流程'],['常见问题'],['重现紧致年轻的身体线条']],
      '.benefit-card h3':           [['全面紧致皮肤'],['提升松弛区域'],['促进胶原新生'],['非手术方案'],['改善肌肤弹性']],
      '.benefit-card p':            [['有效收紧手臂、腹部、大腿内侧等松弛部位的皮肤，重现紧致的身体轮廓。'],['提升产后、减重后或因年龄增长导致的皮肤松弛，恢复年轻紧致的身体线条。'],['射频和超声波技术刺激皮肤深层胶原蛋白大量新生，从内而外改善皮肤弹性。'],['无需手术、无需麻醉、无需停工，安全舒适地实现皮肤紧致提升。'],['治疗效果随时间持续改善，胶原蛋白新生使皮肤弹性和紧致度长期提升。']],
      '.step__body h3':             [['皮肤松弛评估'],['治疗区域规划'],['射频/超声疗程'],['渐进性紧致阶段']],
      '.step__body p':              [['评估皮肤松弛程度、弹性丢失情况和胶原蛋白含量，制定针对性治疗方案。'],['根据不同部位的皮肤特征，精准设置射频或超声波的能量参数和治疗深度。'],['每次疗程约45–60分钟，通常需要6–8次，每3–4周进行一次，效果在疗程期间持续累积。'],['疗程结束后2–3个月内，随着胶原蛋白的持续生成，皮肤紧致度会继续提升。']],
      '.faq-a p':                   [['可以显著改善。非手术皮肤紧致技术最适合轻至中度松弛，对于严重松弛（如大量减重后），可能需要结合其他方案或手术。'],['通常需要6–8次疗程，每次间隔3–4周，以便胶原蛋白有充足时间新生。部分客户需要更多次数以达到理想效果。'],['多数客户在3–4次疗程后开始看到明显改善，完整疗程结束后效果最为显著，并在之后3个月内继续改善。'],['年龄增长、体重变化、妊娠、遗传因素、日晒和生活方式都可能导致皮肤胶原流失和松弛。']],
      '.page-cta h2':               [['重现紧致年轻的完美身体线条']],
      '.page-cta p':                [['预约免费身体评估，了解皮肤紧致方案，首次疗程享受5折优惠。']],
    },

    'body-treatments/stubborn-fat': {
      '.page-hero h1':              [['顽固脂肪去除']],
      '.page-hero > .container > p':[['采用冷冻溶脂、超声空化和射频塑身技术，无需手术，针对性消除腹部、腰侧、大腿等顽固脂肪。']],
      '.section__title':            [['顽固脂肪——非手术精准塑身'],['主要优势'],['疗程流程'],['常见问题'],['塑造您的理想身材']],
      '.benefit-card h3':           [['精准针对顽固脂肪'],['无需手术'],['塑造身体轮廓'],['临床验证效果'],['长久效果维持']],
      '.benefit-card p':            [['无论运动和节食多努力都无法消除的顽固脂肪，激光和冷冻技术可精准针对并有效减少。'],['无针无刀无麻醉，疗程过程舒适，结束后可立即恢复正常活动。'],['精准处理特定区域，让身体轮廓更加流畅，穿衣效果更加理想。'],['冷冻溶脂技术获FDA认证，多项临床研究证实其安全性和有效性，减脂效果显著。'],['脂肪细胞一旦被破坏就不会再生，在健康生活方式的配合下，效果可长久维持。']],
      '.step__body h3':             [['身体成分分析'],['目标区域确认'],['非手术减脂疗程'],['轮廓塑造与监测']],
      '.step__body p':              [['通过专业的身体成分分析和视觉评估，精准确定顽固脂肪的位置和厚度，制定个性化方案。'],['根据不同脂肪堆积区域（腹部、腰侧、大腿、手臂等）选择最合适的技术和参数设置。'],['冷冻溶脂每次约60分钟，超声空化每次30–45分钟，通常4–8次疗程即可达到显著效果。'],['定期测量和拍照对比，跟踪脂肪减少和体型改善的进度，适时调整方案。']],
      '.faq-a p':                   [['冷冻溶脂是通过将特定温度的冷能量施加于脂肪区域，使脂肪细胞发生冷冻凋亡（自然死亡），随后被身体自然代谢排出的过程。完全安全，不损伤周围组织。'],['每次疗程可减少约20–25%的目标区域脂肪，4–8次疗程后可实现显著的轮廓改变。但这不是减肥疗程，主要用于塑形。'],['这是塑身而非减肥。体重可能变化不大，但目标区域的脂肪会减少，身体轮廓会更加流畅，衣服穿起来效果更好。'],['脂肪细胞一旦被永久破坏，在健康生活方式的配合下效果可长期维持。但若体重大幅增加，其他区域的脂肪可能增多。']],
      '.page-cta h2':               [['塑造您梦想中的完美身材轮廓']],
      '.page-cta p':                [['预约免费身体分析，了解非手术减脂塑形方案，首次疗程享受5折优惠。']],
    },

    'body-treatments/stretch-marks': {
      '.page-hero h1':              [['妊娠纹修复']],
      '.page-hero > .container > p':[['采用点阵激光和射频微针技术，有效淡化腹部、大腿、手臂上的妊娠纹，无论新旧均有效。']],
      '.section__title':            [['妊娠纹修复——重现光滑均匀肌肤'],['主要优势'],['疗程流程'],['常见问题'],['重现光滑均匀的美丽肌肤']],
      '.benefit-card h3':           [['有效淡化妊娠纹'],['改善肌肤质地'],['新旧纹路均适用'],['促进胶原再生'],['增强皮肤弹性']],
      '.benefit-card p':            [['激光和射频能量有效破坏妊娠纹的纤维结构，刺激健康皮肤组织的重建，显著淡化纹路。'],['改善妊娠纹区域的肌肤质地和颜色，使其更接近周围正常肌肤的外观。'],['无论是妊娠后、青春期生长或体重变化留下的新旧妊娠纹，均可得到有效改善。'],['治疗刺激真皮层的胶原蛋白和弹力纤维大量新生，从根本重建皮肤结构，改善弹性。'],['随着胶原蛋白的持续新生，皮肤弹性增强，有助于预防新妊娠纹的形成。']],
      '.step__body h3':             [['妊娠纹评估'],['胶原诱导治疗方案'],['激光/射频修复疗程'],['皮肤再生恢复阶段']],
      '.step__body p':              [['评估妊娠纹的颜色（红色/紫色的新纹或白色/银色的旧纹）、深度和面积，选择最有效的治疗方案。'],['新妊娠纹（红/紫色）通常对脉冲染料激光反应最好，旧妊娠纹（白/银色）则更适合点阵激光和射频微针。'],['每次疗程约30–60分钟，通常需要4–8次，每3–4周进行一次，每次后肌肤会进入修复再生阶段。'],['疗程后给予专业的肌肤修复指导，配合使用含有视黄醇、透明质酸的护理产品，加速妊娠纹淡化效果。']],
      '.faq-a p':                   [['旧妊娠纹（白/银色）可以得到显著改善，但可能需要更多次疗程。新妊娠纹（红/紫色）通常对治疗反应更好，效果更为显著。'],['通常需要4–8次疗程，具体次数取决于妊娠纹的严重程度和新旧情况。需要有耐心，效果是渐进性的。'],['点阵激光疗程可能有轻微灼热感和针刺感，治疗后有短暂的红肿期（约1–3天）。射频微针的不适感相对较少。'],['通常在2–3次疗程后开始看到明显改善，完整疗程结束后及后续数月内效果会持续提升。']],
      '.page-cta h2':               [['重现光滑均匀的美丽肌肤']],
      '.page-cta p':                [['预约免费评估，了解妊娠纹修复方案，首次疗程享受5折优惠。']],
    },

    'body-treatments/supra-body': {
      '.page-hero h1':              [['全身塑形旗舰疗程']],
      '.page-hero > .container > p':[['集橘皮纹消除、脂肪减少、皮肤紧致与美白于一体的12次综合全身塑形旗舰方案，带来全面蜕变。']],
      '.section__title':            [['全身塑形——您的终极蜕变之旅'],['旗舰方案优势'],['疗程流程'],['常见问题'],['开启您的全身蜕变之旅']],
      '.benefit-card h3':           [['全面综合方案'],['多重技术协同'],['12次系统疗程'],['全身多部位覆盖'],['持久蜕变效果']],
      '.benefit-card p':            [['唯一结合橘皮纹改善、脂肪消除、皮肤紧致和美白增亮四大功能的综合旗舰方案。'],['多种顶级技术协同作用，效果远超单一疗程，最大化您的身体改善成果。'],['12次精心设计的系统化疗程，确保循序渐进、全面持久的身体蜕变效果。'],['从腹部、腰侧、大腿到手臂，全面覆盖您关心的所有身体部位。'],['系统化的疗程方案确保效果深入持久，配合维护建议可长期保持理想状态。']],
      '.step__body h3':             [['全面身体分析'],['个性化方案设计'],['12次多技术疗程'],['进度评估与调整'],['维护阶段']],
      '.step__body p':              [['进行全面的身体成分分析、皮肤评估和目标设定，为您量身定制最有效的全身方案。'],['根据您的具体情况，精心设计12次疗程的顺序、技术组合和重点区域分配。'],['每次疗程约60–90分钟，结合最多4种不同技术，系统处理不同的身体问题。'],['每3次疗程进行一次全面的效果评估和对比，根据进度适时调整方案，确保最佳成效。'],['完成12次主疗程后，提供个性化维护建议和定期维护疗程，帮助您长期保持理想效果。']],
      '.faq-a p':                   [['全身塑形方案将原本需要分开进行的多种疗程整合在一起，通过系统化的12次综合疗程，让所有技术协同发挥最大效果，总体性价比远超单独购买各项疗程。'],['12次疗程通常分布在3–4个月内完成，建议每周进行1–2次。'],['多数客户在完成一半疗程（约6次）时就开始看到显著的全方位改善，12次完成后效果最为明显。'],['每次疗程可根据您当天的状况和进度灵活调整，确保每一次都为您的整体目标贡献最大价值。']],
      '.page-cta h2':               [['开启您的全身蜕变之旅']],
      '.page-cta p':                [['预约免费全身分析，了解全身塑形旗舰方案，享受专属优惠。']],
    },

    /* ---------- SKIN BRIGHTENING -------------------------- */
    'skin-brightening/face': {
      '.page-hero h1':              [['面部美白亮肤']],
      '.page-hero > .container > p':[['采用IPL光子嫩肤、激光焕肤和维生素C导入技术，有效淡化暗沉、色斑，重现透亮发光的明星肌肤。']],
      '.section__title':            [['面部美白——焕发自然光芒'],['主要优势'],['疗程流程'],['常见问题'],['焕发您的肌肤光彩']],
      '.benefit-card h3':           [['均匀亮丽肤色'],['淡化暗沉'],['减少色斑'],['提亮整体气色'],['滋养深层肌肤']],
      '.benefit-card p':            [['有效改善肤色不均，让肌肤呈现均匀、自然的亮白效果。'],['激活沉睡的暗沉肌肤，让面部重焕生机，显现健康光泽。'],['针对色斑、晒斑和色素沉着，精准淡化，还原均匀净透的肌肤。'],['整体提亮肤色，改善面色暗黄，让您看起来更有活力、更加年轻。'],['维生素C和谷胱甘肽等美白精华深入肌肤底层，从内而外滋养，持续提亮。']],
      '.step__body h3':             [['肤色评估'],['美白方案定制'],['激光与导入疗程'],['光彩维护计划']],
      '.step__body p':              [['专业评估您的肤色、色斑类型和肌肤暗沉程度，制定最有效的个性化美白方案。'],['根据皮肤状况选择最合适的美白技术组合，可能包括IPL光子、激光嫩肤和美白精华导入。'],['每次疗程约45分钟，通常4–6次为一个疗程，每次间隔2–3周，效果循序渐进、自然持久。'],['疗程结束后提供完整的防晒和维护建议，配合定期维护疗程，保持持久的美白亮肤效果。']],
      '.faq-a p':                   [['多数客户在2–3次疗程后就能感受到明显的提亮效果，完整疗程结束后肤色均匀度和亮度会有显著提升。'],['是的，我们的IPL和激光技术专为亚洲肤色安全设计，通过专业的参数设置确保在有效美白的同时，不会造成肤色不均或其他副作用。'],['通常4–6次为一个完整疗程，根据个人肤色和目标不同，部分客户可能需要8次以上。'],['防晒是维持美白效果最重要的一步。建议每日使用SPF50+防晒霜，避免长时间日晒，定期进行维护疗程。']],
      '.page-cta h2':               [['焕发您的天然肌肤光彩']],
      '.page-cta p':                [['预约免费肤色评估，了解最适合您的面部美白方案，首次疗程享受5折优惠。']],
    },

    'skin-brightening/body': {
      '.page-hero h1':              [['身体美白亮肤']],
      '.page-hero > .container > p':[['针对手肘、膝盖、腋下、大腿内侧等暗沉部位，采用IPL和美白导入技术，实现全身均匀亮白。']],
      '.section__title':            [['身体美白——全身均匀亮丽肤色'],['主要优势'],['疗程流程'],['常见问题'],['拥有全身均匀亮白的肌肤']],
      '.benefit-card h3':           [['均匀全身肤色'],['淡化暗沉部位'],['改善粗糙肤质'],['增强皮肤光泽'],['自信穿着各种衣物']],
      '.benefit-card p':            [['有效改善全身肤色不均，让皮肤从头到脚呈现均匀亮白的效果。'],['针对手肘、膝盖、腋下等容易暗沉的部位，精准改善深色区域。'],['去除老旧角质，改善粗糙暗沉的肌肤质地，让皮肤更加细腻光滑。'],['美白精华和光疗技术双管齐下，从内而外提升肌肤光泽感。'],['均匀亮白的身体肌肤让您自信穿着无袖、短裙和泳装，尽情展示美丽。']],
      '.step__body h3':             [['全身肤色分析'],['问题区域定位'],['身体IPL与导入疗程'],['维护计划']],
      '.step__body p':              [['全面评估全身肤色状况，识别需要重点改善的暗沉区域和成因。'],['针对不同区域的暗沉类型（摩擦型、色素型、干燥型），制定差异化的治疗方案。'],['根据处理面积，每次疗程需时45–90分钟，通常6–8次为一个完整疗程。'],['提供家居护理建议，包括去角质和身体乳的使用方法，帮助维持和延续治疗效果。']],
      '.faq-a p':                   [['是的！腋下暗沉通常由摩擦、剃毛和化学物质（如止汗剂）引起，我们的美白疗程结合减少摩擦的建议，可以有效改善腋下肤色。'],['通常需要6–8次疗程，暗沉较严重的区域可能需要更多次，坚持治疗效果更为显著。'],['是的，我们的技术可以安全有效地改善亚洲人常见的全身肤色不均问题，包括较深的棕色和黑色皮肤。'],['手肘、膝盖、腋下和大腿内侧是最常见的暗沉部位，这些区域因长期摩擦和色素积累容易变黑。']],
      '.page-cta h2':               [['拥有全身均匀亮白的完美肌肤']],
      '.page-cta p':                [['预约免费肤色评估，了解身体美白方案，首次疗程享受5折优惠。']],
    },

    'skin-brightening/intensive': {
      '.page-hero h1':              [['深度美白旗舰疗程']],
      '.page-hero > .container > p':[['专为顽固色斑、深层色素沉着设计，结合皮秒激光、IPL和美白导入的10–15次综合深度美白疗程。']],
      '.section__title':            [['深度美白——针对顽固色素的终极方案'],['旗舰方案优势'],['疗程流程'],['常见问题'],['开启您的深度美白之旅']],
      '.benefit-card h3':           [['针对顽固色素'],['皮秒激光技术'],['面身一体美白'],['医疗级深度效果'],['持久通透光彩']],
      '.benefit-card p':            [['专为其他普通美白方案无法有效改善的顽固黄褐斑、深层色素和大面积色斑设计。'],['皮秒激光以超快速脉冲精准击碎深层色素颗粒，效果远超传统激光，同时减少对周围肌肤的影响。'],['同时改善面部和身体的色素问题，实现由内而外、从头到脚的全面深度美白。'],['医疗级技术组合和专业方案设计，实现普通美容院无法达到的深度美白效果。'],['系统化的深度疗程确保美白效果深入稳定，在专业维护下可长久保持通透光彩。']],
      '.step__body h3':             [['深度肌肤分析与拍照记录'],['个性化深度美白方案'],['多技术联合疗程'],['进度追踪'],['维护阶段']],
      '.step__body p':              [['使用专业皮肤分析仪进行深度检测，包括VISIA皮肤分析，详细记录色斑分布、深度和类型，建立完整的治疗档案。'],['根据分析结果，精心设计10–15次的系统性美白方案，明确每次疗程的重点和预期效果。'],['灵活组合皮秒激光、Q开关激光、IPL光子和美白精华导入，每次疗程约45–60分钟，针对不同深度的色素问题。'],['每3次疗程进行一次效果对比评估，通过拍照和皮肤测量客观记录改善进度，适时调整方案。'],['主疗程完成后，制定个性化的长期维护计划，包括定期维护疗程和居家护理方案，确保美白效果持久稳定。']],
      '.faq-a p':                   [['深度美白疗程专为患有顽固黄褐斑、大面积色素沉着、日晒引起的严重暗沉，或普通美白疗程效果不理想的人群设计。'],['深度美白疗程采用更先进的技术（如皮秒激光）、更系统的方案设计（10–15次）和更全面的面身一体化处理，效果深度和持续性远优于常规美白疗程。'],['通常10–15次为一个完整疗程，约需3–4个月完成，之后进入维护阶段。'],['系统化的深度疗程加上规范的防晒和居家护理，效果可持续1–2年，定期维护疗程有助于进一步延长效果。']],
      '.page-cta h2':               [['开启您的深度美白蜕变之旅']],
      '.page-cta p':                [['预约免费深度肌肤分析，了解深度美白旗舰疗程，享受专属优惠。']],
    },

    /* ---------- ACNE ------------------------------------- */
    'acne/face': {
      '.page-hero h1':              [['面部痘痘专业治疗']],
      '.page-hero > .container > p':[['针对各类型痘痘——黑头、白头、脓包至囊性痘——采用LED蓝光、IPL及水杨酸专业护理，实现清透无瑕肌肤。']],
      '.section__title':            [['面部痘痘治疗——专业清透，标本兼治'],['主要优势'],['疗程流程'],['常见问题'],['告别痘痘，重拾自信']],
      '.benefit-card h3':           [['快速清除活跃痘痘'],['根源调控油脂'],['消灭痘痘细菌'],['淡化痘印'],['预防未来爆痘']],
      '.benefit-card p':            [['IPL和LED蓝光技术快速有效地清除各类活跃性痘痘，包括难以处理的囊性和结节性痘痘。'],['从根源调节皮脂腺分泌，减少过剩油脂，从根本控制痘痘的主要成因。'],['蓝光波长精准针对并杀灭导致痘痘的痤疮丙酸杆菌，消除痘痘感染源。'],['专业激光有效淡化痘印和色素沉着，让肌肤逐渐恢复均匀清透的状态。'],['通过建立健康的皮肤微生态和油脂平衡，从根本减少未来痘痘的爆发频率和严重程度。']],
      '.step__body h3':             [['痘痘类型评估'],['个性化护理方案'],['专业痘痘疗程'],['清透肌肤维护计划']],
      '.step__body p':              [['详细分析您的痘痘类型（微粉刺、丘疹、脓包、结节、囊肿）、严重程度、成因和肤质特征。'],['根据痘痘成因（细菌性、油性、激素性或混合型），制定最有针对性的综合治疗方案。'],['疗程通常每1–2周进行一次，每次约30–45分钟，6–8次构成一个完整疗程，同步处理痘痘和痘印。'],['制定长期的清透肌肤维护计划，包括日常护肤建议、定期维护疗程和饮食生活方式指导，从根本预防痘痘复发。']],
      '.faq-a p':                   [['多数客户在2–3次疗程后能看到明显改善，6–8次完整疗程后通常可实现持续清透的效果。部分严重痘痘可能需要更多次。'],['可以！我们有针对严重囊性痘的专业方案，结合抗炎技术和深层清洁，可有效控制和改善严重痘痘。'],['可以，效果更佳。痘痘治疗和痘印消除可以同步进行，我们的方案通常会兼顾两个问题。'],['规律清洁、适度控油、均衡饮食（减少高糖和乳制品）、充足睡眠和减少压力都对改善痘痘有显著帮助。']],
      '.page-cta h2':               [['告别痘痘烦恼，重拾自信光彩']],
      '.page-cta p':                [['预约免费肤质分析，了解痘痘专业治疗方案，首次疗程享受5折优惠。']],
    },

    'acne/body': {
      '.page-hero h1':              [['身体痘痘治疗']],
      '.page-hero > .container > p':[['专业治疗背部、胸部和肩部痘痘，消除痘痘感染源，淡化痘印，恢复光滑自信的身体肌肤。']],
      '.section__title':            [['身体痘痘——专业清除，自信穿搭'],['主要优势'],['疗程流程'],['常见问题'],['告别身体痘痘，自信穿搭']],
      '.benefit-card h3':           [['清除背部痘痘'],['消灭细菌'],['淡化痘印'],['预防复发'],['自信穿着无背装']],
      '.benefit-card p':            [['有效清除背部、胸部和肩部的痘痘，无论是轻微丘疹还是严重的囊性痘都能有效处理。'],['IPL和LED蓝光技术深入皮肤，精准杀灭导致背部痘痘的细菌，从根源清除感染。'],['专业激光有效淡化背部和胸部遗留的痘疤和色素沉着，还原光滑均匀的肌肤。'],['通过调节背部皮脂分泌和建立健康皮肤环境，显著减少痘痘复发的频率和严重程度。'],['清透光滑的背部和胸部肌肤，让您自信穿着无背装、泳装，在海滩和泳池尽情展示美丽。']],
      '.step__body h3':             [['身体痘痘评估'],['目标区域治疗方案'],['专业身体痘痘疗程'],['肌肤维护与预防']],
      '.step__body p':              [['评估身体痘痘的分布区域、类型和严重程度，分析成因（出汗摩擦、细菌感染或内分泌因素）。'],['针对背部、胸部、肩部等不同区域，制定差异化的治疗方案和最佳技术组合。'],['每次疗程约30–45分钟，通常每1–2周进行一次，6–10次为一个完整疗程，效果循序渐进。'],['提供背部护理的日常建议，包括清洁方法、透气衣物选择和运动后护理，帮助长期预防背部痘痘。']],
      '.faq-a p':                   [['身体痘痘通常比面部痘痘更难自行处理，因为皮肤较厚、覆盖面积较大，且受汗液和摩擦影响更大，专业治疗效果更为显著。'],['背部痘痘通常需要8–10次疗程，因为背部皮肤较厚且面积较大，需要更多次数才能达到明显效果。'],['建议疗程当天避免剧烈运动，24小时内尽量避免出汗，使用温和无刺激的沐浴产品，穿着宽松棉质衣物。'],['建议使用温和的含水杨酸或苯甲酸的身体洗剂，运动后及时淋浴，选择透气棉质衣物，避免紧身合成材料衣物。']],
      '.page-cta h2':               [['告别身体痘痘，自信展示每一寸肌肤']],
      '.page-cta p':                [['预约免费评估，了解身体痘痘治疗方案，首次疗程享受5折优惠。']],
    },

    /* ---------- LOCATIONS -------------------------------- */
    'locations/tanjong-pagar': {
      '.page-hero h1':              [['丹戎巴葛分店']],
      '.page-hero > .container > p':[['我们的旗舰门店，位于丹戎巴葛核心地带，交通便利，提供我们全系列的美容疗程服务。']],
      '.section__title':            [['联系我们'],['提供疗程']],
      '.info-box h4':               [['地址'],['电话'],['地铁'],['巴士'],['营业时间'],['注意事项']],
      '.page-cta h2':               [['预约丹戎巴葛分店']],
      '.page-cta p':                [['立即在线预约或致电我们，首次疗程享受5折优惠。']],
    },
    'locations/holland-village': {
      '.page-hero h1':              [['荷兰村分店']],
      '.page-hero > .container > p':[['位于充满活力的荷兰村，是周边居民和上班族的首选美容目的地。']],
      '.section__title':            [['联系我们'],['提供疗程']],
      '.page-cta h2':               [['预约荷兰村分店']],
      '.page-cta p':                [['立即在线预约或致电我们，首次疗程享受5折优惠。']],
    },
    'locations/east-coast': {
      '.page-hero h1':              [['东海岸分店']],
      '.page-hero > .container > p':[['位于充满特色的如切路，是东部居民的理想美容选择，环境温馨，服务专业。']],
      '.section__title':            [['联系我们'],['提供疗程']],
      '.page-cta h2':               [['预约东海岸分店']],
      '.page-cta p':                [['立即在线预约或致电我们，首次疗程享受5折优惠。']],
    },
    'locations/serangoon-garden': {
      '.page-hero h1':              [['实龙岗花园分店']],
      '.page-hero > .container > p':[['位于实龙岗花园的温馨社区，是北部居民的最佳美容选择。']],
      '.section__title':            [['联系我们'],['提供疗程']],
      '.page-cta h2':               [['预约实龙岗花园分店']],
      '.page-cta p':                [['立即在线预约或致电我们，首次疗程享受5折优惠。']],
    },
    'locations/orchard': {
      '.page-hero h1':              [['乌节路分店']],
      '.page-hero > .container > p':[['位于新加坡购物天堂乌节路，是购物之余享受美容护理的完美选择。']],
      '.section__title':            [['联系我们'],['提供疗程']],
      '.page-cta h2':               [['预约乌节路分店']],
      '.page-cta p':                [['立即在线预约或致电我们，首次疗程享受5折优惠。']],
    },

    /* ---------- ABOUT ------------------------------------ */
    'about/our-story': {
      '.page-hero h1':              [['我们的故事']],
      '.page-hero > .container > p':[['二十年耕耘，见证新加坡医学美容的发展。从一间小诊所到五家连锁，我们始终坚持医疗品质和以客为先的初心。']],
      '.section__title':            [['从愿景到现实'],['二十年里程碑'],['开始属于您的美丽故事']],
      '.stat-strip__label':         [['年经验'],['门店地点'],['满意客户'],['获奖项目']],
      '.page-cta h2':               [['成为我们故事的一部分']],
      '.page-cta p':                [['加入超过20,000名信赖EstheClinic的满意客户行列，开始您的美丽之旅。']],
    },
    'about/our-philosophy': {
      '.page-hero h1':              [['我们的理念']],
      '.page-hero > .container > p':[['四大核心理念支撑着我们的每一次服务——医疗诚信、个性化优先、无痛承诺和可见效果。']],
      '.section__title':            [['四大核心理念'],['我们对您的承诺'],['让我们的理念服务于您']],
      '.benefit-card h3':           [['医疗诚信'],['个性化优先'],['无痛承诺'],['可见效果']],
      '.page-cta h2':               [['体验我们理念的不同']],
      '.page-cta p':                [['预约免费咨询，亲身感受EstheClinic以客为先的服务理念，首次疗程享受5折优惠。']],
    },
    'about/technologies': {
      '.page-hero h1':              [['我们的技术与设备']],
      '.page-hero > .container > p':[['我们只采用经FDA认证、临床验证的医疗级技术，从不妥协于品质，只为您提供最安全、最有效的治疗效果。']],
      '.section__title':            [['8大核心技术'],['为何医疗级技术至关重要'],['体验医疗级技术的不同']],
      '.page-cta h2':               [['亲身体验我们的顶级技术']],
      '.page-cta p':                [['预约免费咨询，了解哪种技术最适合您的需求，首次疗程享受5折优惠。']],
    },
    'about/reviews': {
      '.page-hero h1':              [['客户评价与口碑']],
      '.page-hero > .container > p':[['超过20,000名满意客户，超过5,000条真实好评，98%的满意度——这就是EstheClinic的服务承诺。']],
      '.section__title':            [['真实客户评价'],['媒体刊载'],['加入我们满意客户的行列']],
      '.stat-strip__label':         [['满分评分'],['满意客户'],['满意度'],['真实评价']],
      '.page-cta h2':               [['加入我们满意客户的大家庭']],
      '.page-cta p':                [['预约免费咨询，亲身感受超过20,000名客户信赖的卓越服务，首次疗程享受5折优惠。']],
    },
    'about/blog': {
      '.page-hero h1':              [['美容知识博客']],
      '.page-hero > .container > p':[['来自EstheClinic专家团队的专业美容知识、疗程解析和护肤贴士，助您做出最明智的美容决策。']],
      '.section__title':            [['最新美容文章'],['探索更多美容知识']],
      '.page-cta h2':               [['准备好开始您的美丽之旅？']],
      '.page-cta p':                [['预约免费咨询，让我们的专家为您提供个性化建议，首次疗程享受5折优惠。']],
    },
    'about/faq': {
      '.page-hero h1':              [['常见问题解答']],
      '.page-hero > .container > p':[['关于疗程、预约和费用的一切问题，您都能在这里找到答案。如需更多帮助，欢迎随时联系我们。']],
      '.section__title':            [['一般问题'],['疗程相关'],['价格与预约'],['还有其他问题？']],
      '.page-cta h2':               [['没有找到您的答案？']],
      '.page-cta p':                [['我们的专业团队随时为您解答任何问题，欢迎致电或WhatsApp联系我们。']],
    },

    /* ---------- TREATMENT PAGES --------------------------- */
    'treatments/head-eye-spa': {
      '.page-hero h1':                      [['头眼舒缓养护疗程']],
      '.page-hero__inner > p:not(.section__tag)': [['专业头部护理与眼部舒缓疗程的深度修复疗程体验。平衡身体，焕活感官，重新找回最佳的自我。']],
      '.breadcrumb a':                      [['首页']],
      '.breadcrumb > span:nth-child(3)':    [['疗程']],
      '.breadcrumb > span:nth-child(5)':    [['头眼舒缓养护疗程']],
      '.page-hero__btns a':                 [['免费预约咨询'],['了解疗程流程']],
      '.page-cta__btns a':                  [['立即预约'],['探索所有疗程']],
      '.section__tag':                      [['疗程'],['关于疗程'],['疗程效益'],['疗程流程'],['常见问题']],
      '.intro-text h2':                     [['舒解头部疲劳，让眼睛得到充分休息']],
      '.intro-text p:not(.section__tag)':   [['现代生活对头部和眼睛造成巨大压力。长时间盯着屏幕、精神压力、不良姿势和睡眠不足，都会在头皮、颈部和眼部积累成慢性紧张——让您即使休息后仍感到疲惫、思维模糊、难以恢复精力。'],['我们的头眼舒缓疗程专为从根本上解决这一问题而设计。通过热油头皮按摩、穴位按压和专业眼部护理的组合，疗程能够消除积累的紧张感，改善头皮和面部的血液循环，并平静神经系统——带来远超疗程本身的深度放松感受。'],['定期疗程有助于调节睡眠质量、减少与压力相关的头痛、缓解眼部疲劳和干涩，并恢复头皮和秀发的自然活力。这是专为在日常生活中承受脑力压力的人士设计的全面头眼养护仪式。']],
      '.intro-list li':                     [['慢性头皮紧张与头痛'],['因长时间盯屏幕引起的眼部疲劳与干涩'],['难以放松或睡眠质量差'],['头发无光泽或头皮干燥'],['与头部相关的颈肩紧张'],['精神疲劳与注意力不集中']],
      '.section-header h2':                 [['您可以期待的效果'],['疗程流程'],['常见问题']],
      '.section-header p:not(.section__tag)': [['从头部开始的全身重置——释放紧张，恢复清醒，重焕精力。'],['从头皮到眼部，逐步释放、修复、平衡的专业仪式。']],
      '.benefit-card h3':                   [['头皮紧张舒缓'],['眼部疲劳恢复'],['改善头皮健康'],['深度心理平静'],['改善睡眠质量'],['即刻可见的放松效果']],
      '.benefit-card p':                    [['专业按摩与穴位按压能消除头皮、太阳穴和颅底积聚的紧绷感。许多客户在仅一次疗程后，就能明显感受到面部表情和下颌紧张的舒缓。'],['暖眼敷包与眼眶周围的轻柔穴位按压促进血液循环，缓解干涩，并消除因长时间盯屏幕或睡眠不足而产生的沉重、疲劳感。'],['促进头皮血液流动，滋养毛囊，平衡油脂分泌，为持续更健康、更有弹性的秀发创造有利条件。'],['专业头部按摩引发的副交感神经系统反应，能产生冥想般的平静状态——降低皮质醇，减缓心率，让繁忙过载的思维得以平息。'],['定期预约头眼舒缓疗程的客户普遍反映入睡更容易、醒来后更加精神——这是因为神经系统紧张在傍晚得到了有效释放。'],['放松效果在首次疗程中即可见。肌肤显得更加平静，眉头舒展，面容呈现出休息后的焕然一新，周围的人都能感受到变化。']],
      '.step__body h3':                     [['咨询与评估'],['温热油头皮预备'],['头部按摩与穴位按压'],['眼部放松疗法']],
      '.step__body p':                      [['治疗师以简短咨询开始，了解您目前的紧张模式、睡眠质量、使用屏幕习惯以及任何具体问题——头皮干燥、眼部疲劳、头痛或压力。这让我们能够根据您的情况，个性化调整整个疗程中的力道、手法和产品。'],['适合您头皮状态的温热滋养油被轻柔涂抹并揉入头皮和发根。温热感软化组织，开始松解头皮筋膜中积聚的紧张，并为更深层的治疗工作做好准备。芳香精油进一步调动感官，向神经系统发出开始放松的信号。'],['系统化的头部按摩从头皮、太阳穴、前额、颅底到颈上部逐步展开。与舒缓紧张、促进循环及平静神经系统相关的穴位贯穿其中。按压力道根据您的舒适程度和具体紧张区域进行调整。'],['暖眼敷包敷于眼部，随后进行轻柔的眼眶穴位按压序列，针对眼周负责舒缓疲劳、浮肿和眼袋的关键穴位。最后涂抹冷却或舒缓眼部精华，完成眼部护理，让该区域感到清爽焕亮。']],
      '.faq-q':                             [['头眼舒缓疗程应该多久来一次？'],['这个疗程适合头皮敏感的人吗？'],['这对慢性头痛有帮助吗？'],['每次疗程需要多长时间？']],
      '.faq-a p':                           [['用于日常保健和压力管理，每两到三周一次最为理想。如果您正经历急性紧张、频繁头痛或明显眼部疲劳，第一个月内每周疗程能带来更快、更持久的缓解效果。您的治疗师将根据您的生活方式和目标推荐合适的疗程安排。'],['是的。我们会根据您的头皮类型和敏感程度选择相应的油和产品。按压力道始终按照您的舒适程度调整。患有头皮银屑病或湿疹等情况的客户，请事先告知治疗师，以便调整治疗方案。'],['许多客户通过定期头部疗程，明显缓解了紧张性头痛。按摩和穴位按压能够针对紧张性头痛常见的肌肉和筋膜紧张。但如果您的头痛频繁或严重，我们建议您在接受疗程的同时，向医疗专业人士咨询。'],['标准头眼舒缓疗程为60分钟。希望额外加入颈肩护理或全面部放松序列的客户，可预约90分钟延长版疗程。疗程须提前预约——请提前预定您喜欢的时间。']],
      '.page-cta h2':                       [['准备好放下一切，让自己真正休息一下？']],
      '.page-cta p':                        [['立即预约您的头眼舒缓疗程。带着紧绷而来，焕然一新而归——须提前预约。']],
    },

    'treatments/facial-spa': {
      '.page-hero h1':                      [['桃花焕颜面部养护疗程']],
      '.page-hero__inner > p:not(.section__tag)': [['温和的面部养护疗程，结合肌肤亮白、深层补水、柔顺肌理与天然舒缓——专为日常肌肤护理与持久光彩而设计。']],
      '.breadcrumb a':                      [['首页']],
      '.breadcrumb > span:nth-child(3)':    [['疗程']],
      '.breadcrumb > span:nth-child(5)':    [['桃花焕颜面部疗程']],
      '.page-hero__btns a':                 [['免费预约咨询'],['了解疗程流程']],
      '.page-cta__btns a':                  [['立即预约'],['探索所有疗程']],
      '.section__tag':                      [['疗程'],['关于疗程'],['疗程效益'],['疗程流程'],['常见问题']],
      '.intro-text h2':                     [['滋养与放松并重的面部护理']],
      '.intro-text p:not(.section__tag)':   [['我们的面部疗程建立在一个简单的理念之上——当肌肤得到温和、持续且用心的护理时，其反应最为出色。这个疗程不采用激进的换肤或高强度干预，而是顺应肌肤的自然节律，从内而外恢复清晰度、柔软度和自然光泽。'],['桃花焕颜面部护理汲取植物护肤传统精华——结合亮肤活性植物精华、深层补水技术、温和调理按摩及定制面膜方案。效果是真正健康的肌肤：柔软、匀称、平静且充满光彩。'],['适合所有肤质——尤其适合暗沉、不均匀或敏感肌肤，希望在无不适或停工期的情况下看到明显改善的人士。定期疗程可逐步改善肌肤纹理、补水储备，以及肌肤抵御环境压力的能力。']],
      '.intro-list li':                     [['暗沉、不均匀或缺乏光泽的肤色'],['干燥脱皮和粗糙肌理'],['色素沉着初期迹象'],['需要温和护理的敏感肌肤'],['日常肌肤保养与护理'],['活动前亮肤与提升光彩']],
      '.section-header h2':                 [['您可以期待的效果'],['疗程流程'],['常见问题']],
      '.section-header p:not(.section__tag)': [['更亮白、更柔软、更水润的肌肤——从首次疗程即可见，随每次护理持续改善。'],['一套周全的分层护理方案，在一次完整的美肤仪式中完成清洁、亮白、补水与修复。']],
      '.benefit-card h3':                   [['肌肤亮白'],['深层补水'],['柔顺肌理护理'],['天然放松'],['改善肌肤弹性'],['零停工期']],
      '.benefit-card p':                    [['植物亮肤活性成分温和抑制黑色素过度生成，减少肤色不均和色斑的外观，经持续疗程后呈现更清透、更光泽的肤色。'],['分层补水技术——包括面膜、按摩和精华导入——在肌肤多个深度补充水分，产生仅靠外用产品无法实现的持久饱满与柔嫩感。'],['温和去角质和调理按摩逐步改善肌肤纹理，软化粗糙区域，抚平不均匀的表面瑕疵，而不损伤肌肤屏障。'],['面部按摩环节激活面部穴位和淋巴通路——消除浮肿，缓解下颌紧张，让面部在每次疗程后看起来明显更放松、更有轮廓感。'],['定期疗程能强化肌肤的水分屏障，提高其应对环境压力——紫外线、污染和空调——的能力，让肌肤日常保持更平静、更均衡的状态。'],['面部疗程完全无创，无泛红、脱皮或恢复期。您可以立即恢复日常活动——通常离开时的状态比来时更好看。']],
      '.step__body h3':                     [['肌肤分析与咨询'],['深层清洁与预备'],['亮肤精华导入与按摩'],['定制面膜与收尾护理']],
      '.step__body p':                      [['疗程以全面肌肤分析开始，评估您目前的水分含量、肤色均匀度、纹理和敏感程度。治疗师会了解您的日常护肤程序、生活习惯和具体肌肤问题——并以此指导整个疗程的产品选择和按压手法。'],['多步骤深层清洁去除表面杂质、防晒霜和多余皮脂——为后续活性成分的渗透做好准备。温和酶化学去角质轻柔松解老旧角质细胞，无需摩擦，使后续的亮肤和补水步骤能更有效地渗透。'],['浓缩亮肤精华被导入肌肤，并通过专业面部按摩技术加以推送——该技术能同时促进淋巴引流和微循环。此步骤既能输送活性成分，又能即时提升和塑形面部——改善肤色，消除浮肿，并立即产生光泽效果。'],['定制补水亮肤面膜敷上，静待效果充分发挥。揭除后，涂抹适合您肤质的保湿霜和防晒产品，锁住疗程效果并保护成果。您离开时，肌肤洁净、明亮、水润、充满光彩。']],
      '.faq-q':                             [['面部疗程应该多久做一次？'],['这适合敏感肌肤吗？'],['第一次疗程后就能看到效果吗？'],['有停工期吗？']],
      '.faq-a p':                           [['为达到最佳效果，我们建议每两到四周进行一次疗程。肌肤的自然更新周期约为28天，将疗程与这一节律结合，可让每次护理在上次基础上持续累积。大多数客户在肌肤达到健康、水润的基础水平后，每月维护一次即可。'],['是的——面部疗程专为敏感肌肤设计，足够温和。所有使用的产品均以低刺激性为标准精心筛选，治疗师会根据您肌肤的反应调整方案。我们避免使用强效去角质产品、香料以及任何可能损害肌肤屏障的技术。'],['大多数客户在首次疗程后即刻感受到亮白度、光滑度和水润感的明显改善。肌肤看起来更洁净、更均匀、更有光泽。色素、纹理和肤色的累积改善将随着多次疗程的持续进行而逐步显现。'],['完全没有。面部疗程完全无创，不会引起泛红、脱皮或敏感反应。疗程结束后可立即化妆并恢复所有正常活动。在重要活动或场合前安排此疗程是安全的。']],
      '.page-cta h2':                       [['给您的肌肤应得的呵护']],
      '.page-cta p':                        [['立即预约您的面部疗程，感受持续温和护理的美丽蜕变——须提前预约。']],
    },

    'treatments/body-mud-therapy': {
      '.page-hero h1':                      [['全身泥灸舒缓养护疗程']],
      '.page-hero__inner > p:not(.section__tag)': [['全身温热泥灸疗程，深度放松僵硬肌肉，舒缓疲倦四肢，为肌肤排毒，恢复完全的身体活力——从首次疗程即可见效。']],
      '.breadcrumb a':                      [['首页']],
      '.breadcrumb > span:nth-child(3)':    [['疗程']],
      '.breadcrumb > span:nth-child(5)':    [['全身泥灸疗程']],
      '.page-hero__btns a':                 [['免费预约咨询'],['了解疗程流程']],
      '.page-cta__btns a':                  [['立即预约'],['探索所有疗程']],
      '.section__tag':                      [['疗程'],['关于疗程'],['疗程效益'],['疗程流程'],['常见问题']],
      '.intro-text h2':                     [['古老疗愈。现代舒适。']],
      '.intro-text p:not(.section__tag)':   [['泥灸疗法——在亚洲养生传统中被誉为最强大的全身修复疗法之一——通过矿物质丰富的泥土、持续温热与全身包裹的轻柔压力相结合，发挥独特功效。这些元素的协同作用，产生的效果远超普通按摩或身体疗程。'],['我们的治疗用泥以其高矿物质含量精心筛选——富含镁、钙、铁和硅——这些矿物质在温热包裹阶段经皮肤被经皮吸收。泥土的热力深入渗透肌肉组织，释放手部按摩无法触及的慢性紧张感。其结果是一种遍及全身的深度放松感。'],['定期进行全身泥灸疗程，可减少积累的肌肉紧张、改善关节活动度、支持淋巴系统的排毒功能、滋养肌肤，并恢复客户所形容的全身轻盈与活力——那是其他任何体验都无法比拟的感受。']],
      '.intro-list li':                     [['慢性肌肉紧张和身体疲劳'],['四肢酸痛、疲倦或沉重感'],['血液循环不良和水分滞留'],['干燥、粗糙或暗沉的身体肌肤'],['全身疲乏和体力低下'],['压力引起的躯体紧张']],
      '.section-header h2':                 [['您可以期待的效果'],['疗程流程'],['常见问题']],
      '.section-header p:not(.section__tag)': [['全方位身体舒缓，恢复活力，让肌肤如同整个人一样焕然一新。'],['完整的全身修复仪式——从准备与泥灸敷敷，到按摩与收尾护理。']],
      '.benefit-card h3':                   [['深层肌肉放松'],['全身排毒'],['促进血液循环'],['肌肤滋养'],['关节舒适'],['恢复活力']],
      '.benefit-card p':                    [['治疗泥土的持续透热温热能深入到双手无法触及的肌肉层，释放背部、腿部、肩部和臀部深层的慢性紧张感。许多客户形容这是他们所经历过的最完全的肌肉放松。'],['温热促进出汗，将废物和多余液体从组织中带出。与此同时，泥土中的净化矿物质从毛孔吸出杂质——让全身肌肤更洁净、更通透、更焕发光彩。'],['热力和矿物质的作用使血管扩张，刺激全身淋巴流动——减少水分滞留，缓解腿部和脚部的沉重感，并为疲劳的组织输送富含氧气的新鲜血液。'],['矿物质丰富的泥土是天然的肌肤滋养剂——它温和去除老化角质，用微量元素滋养肌肤，并让全身肌肤感觉格外光滑、柔软和焕然一新。效果就如同为全身进行了一次面部护理。'],['治疗性泥土的温热和矿物质含量在关节舒适方面有着悠久的应用历史——缓解僵硬，改善活动度，并减轻因过度使用、体力劳动或长时间久坐带来的不适。'],['客户在全身泥灸疗程后，始终感受到更轻盈、更平静、更有活力——这是躯体放松、血液循环改善以及持续治疗性温热对神经系统深度修复效果的综合体现。']],
      '.step__body h3':                     [['咨询与身体评估'],['身体去角质预备'],['温热泥灸敷敷与包裹'],['冲洗、按摩与收尾护理']],
      '.step__body p':                      [['治疗师首先了解您的主要问题——无论是慢性肌肉紧张、血液循环不良、肌肤状态、疲劳还是全身恢复。特别紧张或不适的部位将被记录并给予额外关注。热疗的医疗条件或禁忌症也在此阶段进行讨论。'],['全身干刷或温和磨砂去角质，去除表面老化角质细胞，打开毛孔，为肌肤最有效地吸收泥土中的治疗性矿物质做好准备。此步骤同时为温热阶段刺激血液循环。'],['矿物质丰富的治疗泥，被加热至最佳治疗温度，丰厚地敷于全身。随后以保温毯包裹，以维持热力，让泥土的矿物质、温热和排毒特性在20至30分钟内深入渗透肌肤和肌肉组织。这是疗程的核心——一段深度身体静止与修复的时光。'],['温水冲洗去除泥土，然后进行针对性身体按摩，进一步释放任何残余紧张感，帮助身体充分吸收热力和矿物质疗法的效果。最后涂抹滋润的身体乳或精油，为新鲜调理的肌肤锁住水分——让身体完全光滑、深度放松、全面焕新。']],
      '.faq-q':                             [['全身泥灸疗程应该多久做一次？'],['全身泥灸疗程适合所有人吗？'],['疗程前后应该注意什么？'],['每次疗程需要多长时间？']],
      '.faq-a p':                           [['用于日常保健和肌肉恢复，每两到四周一次最为理想。有慢性紧张或积极恢复需求的人士，初期可能受益于每周疗程。对于寻求肌肉状态、血液循环或肌肤质量持续改善的客户，通常建议连续进行4至6次疗程，此后每月维护一次。'],['全身泥灸疗程对大多数成年人来说一般安全且有益。但不建议孕妇、未控制的高血压患者、活跃期皮肤感染、开放性伤口或其他不适宜热疗的情况下进行。请在咨询时如实告知您的完整健康状况，以确保疗程适合您。'],['疗程前请多喝水，以支持排毒过程并帮助您舒适应对热力。预约前两小时内避免进食过多。疗程后继续补充水分，以支持疗程结束后持续进行的淋巴和排毒过程。当天余下时间避免剧烈运动——让放松效果得到充分吸收。'],['完整的全身泥灸疗程为90分钟，包括咨询、去角质预备、泥灸敷敷与包裹、冲洗、按摩和收尾护理。疗程须提前预约——请提前预订您喜欢的时间。']],
      '.page-cta h2':                       [['准备好从内而外恢复您的身体？']],
      '.page-cta p':                        [['立即预约您的全身泥灸疗程，体验完全的身体焕新——须提前预约。']],
    },
  };

  /* ========================================================
     3. ENGINE
     ======================================================== */
  let lang = localStorage.getItem('ec_lang') || 'en';

  /* Expose globally so lang buttons can call it */
  window.switchLang = function (newLang) {
    if (newLang === lang) return;
    localStorage.setItem('ec_lang', newLang);
    location.reload();
  };

  function updateButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    /* Update html lang attribute */
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
  }

  /* Apply data-i18n text nodes */
  function applyCommon() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = T[lang][key];
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = T[lang][key];
      if (val !== undefined) el.innerHTML = val;
    });
    /* Placeholders */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const val = T[lang][key];
      if (val !== undefined) el.placeholder = val;
    });
  }

  /* Apply sub-page translations by URL path */
  function applyPage() {
    const path = getPageKey();
    if (!path || !PAGES[path]) return;
    const map = PAGES[path];
    Object.keys(map).forEach(selector => {
      const pairs = map[selector]; /* array of [text, isHTML?] */
      const nodes = document.querySelectorAll(selector);
      pairs.forEach(([text, isHTML], idx) => {
        const el = nodes[idx];
        if (!el) return;
        if (isHTML) {
          el.innerHTML = text;
        } else {
          /* For .faq-q we must preserve the child .faq-icon */
          const icon = el.querySelector('.faq-icon');
          if (icon) {
            el.childNodes[0].nodeValue !== undefined
              ? (el.childNodes[0].nodeValue = text + ' ')
              : (el.firstChild.textContent = text + ' ');
          } else {
            el.textContent = text;
          }
        }
      });
    });
  }

  function applyAll() {
    applyCommon();
    applyPage();
  }

  function getPageKey() {
    const p = window.location.pathname.replace(/\\/g, '/');
    // Old .html style: /treatments/head-eye-spa.html
    const m = p.match(/([\w-]+\/[\w-]+)\.html/);
    if (m) return m[1];
    // Clean URL style: /treatments/head-eye-spa/
    const m2 = p.match(/\/([\w-]+\/[\w-]+)\/?$/);
    return m2 ? m2[1] : null;
  }

  /* Init on DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    if (lang === 'zh') applyAll();
    updateButtons();
  }

})();
