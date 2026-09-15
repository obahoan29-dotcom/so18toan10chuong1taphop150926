const examData = {
  "title": "👍ĐỀ SỐ 18 - ÔN TẬP HỌC KÌ 1 - TOÁN 10💗",
  "password": "",
  "timeLimitMinutes": 45,
  "maxAttempts": "",
  "unlimitedAfterMins": 0,

  "images": {
    "Q1": "",
    "Q2": "",
    "Q3": "",
    "Q4": "",
    "Q5": "",
    "Q6": "",
    "Q7": "",
    "Q8": "",
    "Q9": "",
    "Q10": "",
    "Q11": "",
    "Q12": "",
    "Q13": "",
    "Q14": "",
    "Q15": "",
    "Q16": "",
    "Q17": "https://i.ibb.co/JZcNxkD/c17.png",
    "Q18": "",
    "Q19": "",
    "Q20": "",
    "Q21": "https://i.ibb.co/zhDMWjYS/c21.png",
    "Q22": "",
    "Q23": "",
    "Q24": "",
    "Q25": "",
    "Q26": "",
    "Q27": "https://i.ibb.co/jPPTwxpb/c27.png",
    "Q28": "",
    "Q29": "",
    "Q30": "",
    "Q31": "",
    "Q32": "",
    "Q33": "",
    "Q34": "",
    "Q35": "",
    "Q36": "",
    "Q37": "",
    "Q38": "",
    "Q39": "",
    "Q40": "",
    "Q41": "",
    "Q42": "",
    "Q43": "",
    "Q44": "",
    "Q45": "https://i.ibb.co/60ND2Nm4/c45.png",
    "Q46": "https://i.ibb.co/KpwjCyF7/c46.png",
    "Q47": "",
    "Q48": "",
    "Q49": "",
    "Q50": "",
    "Q51": "",
    "Q52": "",
    "Q53": "",
    "Q54": "",
    "Q55": "",
    "Q56": "",
    "Q57": "",
    "Q58": "",
    "Q59": "",
    "Q60": "",
    "Q61": "",
    "Q62": "",
    "Q63": "",
    "Q64": "",
    "Q65": "",
    "Q66": "",
    "Q67": "",
    "Q68": "",
    "Q69": "",
    "Q70": "https://i.ibb.co/R46cwDNc/c70.png",
    "Q71": "https://i.ibb.co/dJGs2nZJ/c71.png"
  },

  "questions": [
    // PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (62 CÂU)
    {
      "id": 1,
      "type": "multiple_choice",
      "question": "Trong các phát biểu sau, phát biểu nào là mệnh đề đúng?",
      "imageKey": "Q1",
      "options": [
        "$\\sqrt{3}$ là một số hữu tỉ.",
        "Tổng của độ dài hai cạnh một tam giác lớn hơn độ dài cạnh thứ ba.",
        "Bạn có chăm học không?",
        "Con thì thấp hơn cha."
      ],
      "correct": 1,
      "explanation": "Bất đẳng thức tam giác khẳng định tổng độ dài hai cạnh luôn lớn hơn cạnh còn lại."
    },
    {
      "id": 2,
      "type": "multiple_choice",
      "question": "Trong các câu sau đây câu nào không phải là mệnh đề?",
      "imageKey": "Q2",
      "options": [
        "Một năm có 365 ngày.",
        "Học lớp 10 thật vui.",
        "Nha Trang là thành phố của Khánh Hòa.",
        "$2+3=6$"
      ],
      "correct": 1,
      "explanation": "\"Học lớp 10 thật vui\" là câu cảm thán/bộc lộ cảm xúc, không có tính đúng sai rõ ràng."
    },
    {
      "id": 3,
      "type": "multiple_choice",
      "question": "Với giá trị nào của $x \\in \\mathbb{R}$ thì mệnh đề chứa biến $P(x): \"x+1 < x^2\"$ là đúng?",
      "imageKey": "Q3",
      "options": [
        "$x=0$",
        "$x=2$",
        "$x=1$",
        "$x=\\frac{1}{2}$"
      ],
      "correct": 1,
      "explanation": "Thay $x=2$ vào ta được $2+1 < 2^2 \\Leftrightarrow 3 < 4$ (đúng)."
    },
    {
      "id": 4,
      "type": "multiple_choice",
      "question": "Cho mệnh đề chứa biến $P(x): \"x+15 \\le x^2\"$ với $x$ là số thực. Mệnh đề nào sau đây là mệnh đề đúng?",
      "imageKey": "Q4",
      "options": [
        "$P(2)$",
        "$P(3)$",
        "$P(-4)$",
        "$P(0)$"
      ],
      "correct": 2,
      "explanation": "Với $x=-4 \\Rightarrow -4+15 = 11 \\le (-4)^2 = 16$ (đúng)."
    },
    {
      "id": 5,
      "type": "multiple_choice",
      "question": "Trong các mệnh đề sau, mệnh đề nào sai?",
      "imageKey": "Q5",
      "options": [
        "$\\exists x \\in \\mathbb{Q}, x \\text{ chia hết cho } 5$",
        "$\\forall x \\in \\mathbb{R}: 5 \\cdot x = x \\cdot 5$",
        "$\\exists x \\in \\mathbb{R}: x^2+x+2>0$",
        "$\\exists x \\in \\mathbb{Z}: 2x+3=6$"
      ],
      "correct": 3,
      "explanation": "Phương trình $2x+3=6 \\Leftrightarrow x=\\frac{3}{2} \\notin \\mathbb{Z}$ nên mệnh đề D sai."
    },
    {
      "id": 6,
      "type": "multiple_choice",
      "question": "Trong các mệnh đề sau, mệnh đề nào đúng?",
      "imageKey": "Q6",
      "options": [
        "$\\forall x \\in \\mathbb{R}, x^2 > 1 \\Rightarrow x > -1$",
        "$\\forall x \\in \\mathbb{R}, x^2 > 1 \\Rightarrow x > 1$",
        "$\\forall x \\in \\mathbb{R}, x > -1 \\Rightarrow x^2 > 1$",
        "$\\forall x \\in \\mathbb{R}, x > 1 \\Rightarrow x^2 > 1$"
      ],
      "correct": 3,
      "explanation": "Với mọi $x>1$, bình phương hai vế ta luôn có $x^2>1$."
    },
    {
      "id": 7,
      "type": "multiple_choice",
      "question": "Trong các mệnh đề dưới đây mệnh đề nào đúng?",
      "imageKey": "Q7",
      "options": [
        "$\\forall x \\in \\mathbb{R}, x^2+1>0$",
        "$\\forall x \\in \\mathbb{R}, x^2>x$",
        "$\\exists r \\in \\mathbb{Q}, r^2=7$",
        "$\\forall n \\in \\mathbb{N}, n+4 \\text{ chia hết cho } 4$"
      ],
      "correct": 0,
      "explanation": "Vì $x^2 \\ge 0, \\forall x \\in \\mathbb{R} \\Rightarrow x^2+1 \\ge 1 > 0$ luôn đúng."
    },
    {
      "id": 8,
      "type": "multiple_choice",
      "question": "Cho mệnh đề \"Phương trình $x^2-4x+4=0$ có nghiệm\". Mệnh đề phủ định của mệnh đề đã cho và tính đúng, sai của mệnh đề phủ định là:",
      "imageKey": "Q8",
      "options": [
        "Phương trình $x^2-4x+4=0$ có nghiệm. Đây là mệnh đề đúng.",
        "Phương trình $x^2-4x+4=0$ có nghiệm. Đây là mệnh đề sai.",
        "Phương trình $x^2-4x+4=0$ vô nghiệm. Đây là mệnh đề đúng.",
        "Phương trình $x^2-4x+4=0$ vô nghiệm. Đây là mệnh đề sai."
      ],
      "correct": 3,
      "explanation": "Mệnh đề phủ định là \"Phương trình $x^2-4x+4=0$ vô nghiệm\". Do phương trình có nghiệm kép $x=2$ nên mệnh đề phủ định này sai."
    },
    {
      "id": 9,
      "type": "multiple_choice",
      "question": "Mệnh đề $\\forall x \\in \\mathbb{R}, x^2-2+a>0$ với $a$ là số thực cho trước. Tìm $a$ để mệnh đề đúng.",
      "imageKey": "Q9",
      "options": [
        "$a \\le 2$",
        "$a < 2$",
        "$a = 2$",
        "$a > 2$"
      ],
      "correct": 3,
      "explanation": "Biểu thức $x^2-2+a>0, \\forall x \\Leftrightarrow a - 2 > -x^2, \\forall x \\Leftrightarrow a - 2 > 0 \\Leftrightarrow a > 2$."
    },
    {
      "id": 10,
      "type": "multiple_choice",
      "question": "Cho mệnh đề: \"$\\forall x \\in \\mathbb{R}, x^2+3x+5>0$\". Mệnh đề phủ định của mệnh đề trên là",
      "imageKey": "Q10",
      "options": [
        "$\\forall x \\in \\mathbb{R}, x^2+3x+5 \\le 0$",
        "$\\exists x \\in \\mathbb{R}, x^2+3x+5 \\le 0$",
        "$\\forall x \\in \\mathbb{R}, x^2+3x+5 < 0$",
        "$\\exists x \\in \\mathbb{R}, x^2+3x+5 > 0$"
      ],
      "correct": 1,
      "explanation": "Phủ định của $\\forall$ là $\\exists$, phủ định của $>$ là $\\le$."
    },
    {
      "id": 11,
      "type": "multiple_choice",
      "question": "Cho mệnh đề: \"$\\exists x \\in \\mathbb{R}, x^2+x+1=0$\". Mệnh đề phủ định của mệnh đề trên là:",
      "imageKey": "Q11",
      "options": [
        "\"$\\forall x \\in \\mathbb{R}, x^2+x+1=1$\"",
        "\"$\\forall x \\in \\mathbb{R}, x^2+x+1 \\ne 0$\"",
        "\"$\\forall x \\in \\mathbb{R}, x^2+x+1=0$\"",
        "\"$\\exists x \\in \\mathbb{R}, x^2+x+1 \\ne 0$\""
      ],
      "correct": 1,
      "explanation": "Phủ định của $\\exists$ là $\\forall$, phủ định của $=$ là $\\ne$."
    },
    {
      "id": 12,
      "type": "multiple_choice",
      "question": "Mệnh đề $P(x): \"\\forall x \\in \\mathbb{R}, x^2-x+3<0\"$. Phủ định của mệnh đề $P(x)$ là:",
      "imageKey": "Q12",
      "options": [
        "$\\exists x \\in \\mathbb{R}, x^2-x+3>0$",
        "$\\forall x \\in \\mathbb{R}, x^2-x+3>0$",
        "$\\forall x \\notin \\mathbb{R}, x^2-x+3 \\ge 0$",
        "$\\exists x \\in \\mathbb{R}, x^2-x+3 \\ge 0$"
      ],
      "correct": 3,
      "explanation": "Phủ định của $\\forall x \\in \\mathbb{R}, P(x)$ là $\\exists x \\in \\mathbb{R}, \\overline{P(x)}$."
    },
    {
      "id": 13,
      "type": "multiple_choice",
      "question": "Trong các tập hợp sau, tập hợp nào là tập rỗng?",
      "imageKey": "Q13",
      "options": [
        "$M=\\{x \\in \\mathbb{N} \\mid 2x-1=0\\}$",
        "$M=\\{x \\in \\mathbb{Q} \\mid 3x+2=0\\}$",
        "$M=\\{x \\in \\mathbb{R} \\mid x^2-6x+9=0\\}$",
        "$M=\\{x \\in \\mathbb{Z} \\mid x^2=0\\}$"
      ],
      "correct": 0,
      "explanation": "Phương trình $2x-1=0 \\Leftrightarrow x=\\frac{1}{2} \\notin \\mathbb{N}$ nên tập hợp rỗng."
    },
    {
      "id": 14,
      "type": "multiple_choice",
      "question": "Cho tập hợp $A=\\{1;2;3;4\\}$. Tập hợp $A$ có tất cả bao nhiêu tập con có đúng 3 phần tử?",
      "imageKey": "Q14",
      "options": [
        "3",
        "16",
        "4",
        "5"
      ],
      "correct": 2,
      "explanation": "Các tập con có 3 phần tử là: $\\{1;2;3\\}, \\{1;2;4\\}, \\{1;3;4\\}, \\{2;3;4\\}$ (gồm 4 tập hợp)."
    },
    {
      "id": 15,
      "type": "multiple_choice",
      "question": "Cho hai tập hợp $A=\\{0;2;3;5\\}$ và $B=\\{2;7\\}$. Khi đó $A \\cap B$ bằng:",
      "imageKey": "Q15",
      "options": [
        "$A \\cap B = \\{2;5\\}$",
        "$A \\cap B = \\{2\\}$",
        "$A \\cap B = \\emptyset$",
        "$A \\cap B = \\{0;2;3;5;7\\}$"
      ],
      "correct": 1,
      "explanation": "Phần tử chung duy nhất giữa hai tập hợp là $2$."
    },
    {
      "id": 16,
      "type": "multiple_choice",
      "question": "Cho hai tập hợp $X=\\{1;2;4;7;9\\}$ và $Y=\\{-1;0;7;10\\}$. Tập hợp $X \\cup Y$ có bao nhiêu phần tử?",
      "imageKey": "Q16",
      "options": [
        "9",
        "7",
        "8",
        "10"
      ],
      "correct": 2,
      "explanation": "$X \\cup Y = \\{-1;0;1;2;4;7;9;10\\}$ gồm 8 phần tử."
    },
    {
      "id": 17,
      "type": "multiple_choice",
      "question": "Phần tô đậm trong hình vẽ biểu diễn tập hợp nào?",
      "imageKey": "Q17",
      "options": [
        "$B \\setminus A$",
        "$A \\setminus B$",
        "$A \\cap B$",
        "$A \\cup B$"
      ],
      "correct": 0,
      "explanation": "Phần tô đậm thuộc tập B nhưng không thuộc tập A, tức là $B \\setminus A$."
    },
    {
      "id": 18,
      "type": "multiple_choice",
      "question": "Cho hai tập hợp $A=\\{2;4;6;9\\}$, $B=\\{1;2;3;4\\}$. Tập $A \\setminus B$ bằng tập hợp nào sau đây?",
      "imageKey": "Q18",
      "options": [
        "$\\{2;4\\}$",
        "$\\{1;3\\}$",
        "$\\{6;9\\}$",
        "$\\{6;9;1;3\\}$"
      ],
      "correct": 2,
      "explanation": "Gồm các phần tử thuộc A nhưng không thuộc B, đó là $\\{6;9\\}$."
    },
    {
      "id": 19,
      "type": "multiple_choice",
      "question": "Chọn khẳng định sai trong các khẳng định sau:",
      "imageKey": "Q19",
      "options": [
        "$\\mathbb{N} \\cap \\mathbb{Z} = \\mathbb{N}$",
        "$\\mathbb{Q} \\cup \\mathbb{R} = \\mathbb{R}$",
        "$\\mathbb{Q} \\cap \\mathbb{N}^* = \\mathbb{N}^*$",
        "$\\mathbb{Q} \\cup \\mathbb{N}^* = \\mathbb{N}^*$"
      ],
      "correct": 3,
      "explanation": "Vì $\\mathbb{N}^* \\subset \\mathbb{Q}$ nên $\\mathbb{Q} \\cup \\mathbb{N}^* = \\mathbb{Q}$ chứ không phải $\\mathbb{N}^*$."
    },
    {
      "id": 20,
      "type": "multiple_choice",
      "question": "Cho A: \"Tập hợp các học sinh khối 10 học giỏi\", B: \"Tập hợp các học sinh nữ học giỏi\", C: \"Tập hợp các học sinh nam khối 10 học giỏi\". Vậy tập hợp C là:",
      "imageKey": "Q20",
      "options": [
        "$A \\subset B$",
        "$B \\setminus A$",
        "$A \\cap B$",
        "$A \\setminus B$"
      ],
      "correct": 3,
      "explanation": "Tập hợp các học sinh khối 10 học giỏi mà không phải nữ (tức học sinh nam) chính là $A \\setminus B$."
    },
    {
      "id": 21,
      "type": "multiple_choice",
      "question": "Cho các tập hợp A, B, C được minh họa bằng biểu đồ Ven. Phần tô màu xám trong hình là biểu diễn của tập hợp nào sau đây?",
      "imageKey": "Q21",
      "options": [
        "$A \\cap B \\cap C$",
        "$(A \\setminus C) \\cup (A \\setminus B)$",
        "$(A \\cup B) \\setminus C$",
        "$(A \\cap B) \\setminus C$"
      ],
      "correct": 3,
      "explanation": "Phần tô xám thuộc phần giao của A và B nhưng bỏ đi phần thuộc C, tức $(A \\cap B) \\setminus C$."
    },
    {
      "id": 22,
      "type": "multiple_choice",
      "question": "Dùng kí hiệu khoảng, đoạn để viết lại tập hợp sau: $B=\\left\\{x \\in \\mathbb{R} \\mid -\\frac{1}{2} < x \\le 3\\right\\}$",
      "imageKey": "Q22",
      "options": [
        "$B=\\left[-\\frac{1}{2};3\\right]$",
        "$B=\\left(-\\frac{1}{2};3\\right]$",
        "$B=\\left[-\\frac{1}{2};3\\right)$",
        "$B=\\left(-\\frac{1}{2};3\\right)$"
      ],
      "correct": 1,
      "explanation": "Bất đẳng thức $-1/2 < x \\le 3$ tương ứng nửa khoảng $(-1/2; 3]$."
    },
    {
      "id": 23,
      "type": "multiple_choice",
      "question": "Cho tập hợp $X=\\{1;5\\}$, $Y=\\{1;3;5\\}$. Tập $X \\cap Y$ là tập hợp nào sau đây?",
      "imageKey": "Q23",
      "options": [
        "$\\{1\\}$",
        "$\\{1;3\\}$",
        "$\\{1;3;5\\}$",
        "$\\{1;5\\}$"
      ],
      "correct": 3,
      "explanation": "Vì $X \\subset Y$ nên $X \\cap Y = X = \\{1;5\\}$."
    },
    {
      "id": 24,
      "type": "multiple_choice",
      "question": "Tập $(-\\infty;-3) \\cap [-5;2)$ bằng",
      "imageKey": "Q24",
      "options": [
        "$[-5;-3)$",
        "$(-\\infty;-5]$",
        "$(-\\infty;-2)$",
        "$(-3;-2)$"
      ],
      "correct": 0,
      "explanation": "Giao của hai tập hợp là phần chung từ $-5$ đến $-3$, tức $[-5;-3)$."
    },
    {
      "id": 25,
      "type": "multiple_choice",
      "question": "Cho $A=(-\\infty;5]$, $B=(0;+\\infty)$. Tìm $A \\cap B$.",
      "imageKey": "Q25",
      "options": [
        "$A \\cap B = [0;5)$",
        "$A \\cap B = (0;5)$",
        "$A \\cap B = (0;5]$",
        "$A \\cap B = (-\\infty;+\\infty)$"
      ],
      "correct": 2,
      "explanation": "Phần giao nhau chứa các số lớn hơn $0$ và nhỏ hơn hoặc bằng $5$, tức $(0;5]$."
    },
    {
      "id": 26,
      "type": "multiple_choice",
      "question": "Cho các tập hợp $M=[-3;6]$ và $N=(-\\infty;-2) \\cup (3;+\\infty)$. Khi đó $M \\cap N$ là",
      "imageKey": "Q26",
      "options": [
        "$(-\\infty;-2) \\cup [3;6]$",
        "$(-\\infty;-2) \\cup [3;+\\infty)$",
        "$[-3;-2) \\cup (3;6]$",
        "$(-3;-2) \\cup (3;6)$"
      ],
      "correct": 2,
      "explanation": "Giao $M$ với từng khoảng của $N$ thu được $[-3;-2) \\cup (3;6]$."
    },
    {
      "id": 27,
      "type": "multiple_choice",
      "question": "Hình vẽ trên trục số biểu diễn tập hợp nào?",
      "imageKey": "Q27",
      "options": [
        "$(-\\infty;-2) \\cup [5;+\\infty)$",
        "$(-\\infty;-2) \\cup (5;+\\infty)$",
        "$(-\\infty;-2] \\cup (5;+\\infty)$",
        "$(-\\infty;-2] \\cup [5;+\\infty)$"
      ],
      "correct": 0,
      "explanation": "Biểu diễn khoảng từ $-\\infty$ tới $-2$ (ngoặc tròn) và từ $5$ (ngoặc vuông) đến $+\\infty$."
    },
    {
      "id": 28,
      "type": "multiple_choice",
      "question": "Cho tập hợp $X=\\{a;b\\}$, $Y=\\{a;b;c\\}$. $X \\cup Y$ là tập hợp nào sau đây?",
      "imageKey": "Q28",
      "options": [
        "$\\{a;b;c;d\\}$",
        "$\\{a;b\\}$",
        "$\\{c\\}$",
        "$\\{a;b;c\\}$"
      ],
      "correct": 3,
      "explanation": "Vì $X \\subset Y$ nên $X \\cup Y = Y = \\{a;b;c\\}$."
    },
    {
      "id": 29,
      "type": "multiple_choice",
      "question": "Kết quả của $[-4;1) \\cup (-2;3]$ là",
      "imageKey": "Q29",
      "options": [
        "$(-2;1)$",
        "$[-4;3]$",
        "$(-4;2]$",
        "$(1;3]$"
      ],
      "correct": 1,
      "explanation": "Hợp của hai khoảng phủ liên tục từ $-4$ đến $3$, tức đoạn $[-4;3]$."
    },
    {
      "id": 30,
      "type": "multiple_choice",
      "question": "Cho hai tập hợp $A=(-3;3)$ và $B=(0;+\\infty)$. Tìm $A \\cup B$.",
      "imageKey": "Q30",
      "options": [
        "$A \\cup B = (-3;+\\infty)$",
        "$A \\cup B = [-3;+\\infty)$",
        "$A \\cup B = [-3;0)$",
        "$A \\cup B = (0;3)$"
      ],
      "correct": 0,
      "explanation": "Hợp hai khoảng cho ta khoảng $(-3;+\\infty)$."
    },
    {
      "id": 31,
      "type": "multiple_choice",
      "question": "Cho $A=(2;+\\infty)$, $B=(m;+\\infty)$. Điều kiện cần và đủ của $m$ sao cho $B$ là tập con của $A$ là",
      "imageKey": "Q31",
      "options": [
        "$m \\le 2$",
        "$m = 2$",
        "$m > 2$",
        "$m \\ge 2$"
      ],
      "correct": 3,
      "explanation": "Để $B \\subset A$ thì điểm bắt đầu của B phải lớn hơn hoặc bằng của A, tức $m \\ge 2$."
    },
    {
      "id": 32,
      "type": "multiple_choice",
      "question": "Cho số thực $a<0$. Điều kiện cần và đủ để $(-\\infty;9a) \\cap \\left(\\frac{4}{a};+\\infty\\right) \\ne \\emptyset$ là:",
      "imageKey": "Q32",
      "options": [
        "$-\\frac{3}{4} \\le a < 0$",
        "$-\\frac{2}{3} < a < 0$",
        "$-\\frac{2}{3} \\le a < 0$",
        "$-\\frac{3}{4} < a < 0$"
      ],
      "correct": 1,
      "explanation": "Giao khác rỗng khi $\\frac{4}{a} < 9a \\Leftrightarrow 4 > 9a^2$ (vì $a<0$) $\\Leftrightarrow a^2 < \\frac{4}{9} \\Leftrightarrow -\\frac{2}{3} < a < 0$."
    },
    {
      "id": 33,
      "type": "multiple_choice",
      "question": "Cho tập $X=\\{2;4;6;9\\}$, $Y=\\{1;2;3;4\\}$. Tập nào sau đây bằng tập $X \\setminus Y$?",
      "imageKey": "Q33",
      "options": [
        "$\\{1;2;3;5\\}$",
        "$\\{1;3;6;9\\}$",
        "$\\{6;9\\}$",
        "$\\{1\\}$"
      ],
      "correct": 2,
      "explanation": "$X \\setminus Y$ gồm phần tử thuộc X nhưng không thuộc Y, đó là $\\{6;9\\}$."
    },
    {
      "id": 34,
      "type": "multiple_choice",
      "question": "Cho $A=(-\\infty;2]$ và $B=(0;+\\infty)$. Tìm $A \\setminus B$.",
      "imageKey": "Q34",
      "options": [
        "$A \\setminus B = (-\\infty;0]$",
        "$A \\setminus B = (2;+\\infty)$",
        "$A \\setminus B = (0;2]$",
        "$A \\setminus B = (-\\infty;0)$"
      ],
      "correct": 0,
      "explanation": "Trừ đi phần $(0;+\\infty)$ khỏi $(-\\infty;2]$ ta được nửa khoảng $(-\\infty;0]$."
    },
    {
      "id": 35,
      "type": "multiple_choice",
      "question": "Cho hai tập hợp $X=\\{1;2;3;4\\}$, $Y=\\{1;2\\}$. $C_X Y$ là tập hợp nào sau đây?",
      "imageKey": "Q35",
      "options": [
        "$\\{1;2\\}$",
        "$\\{1;2;3;4\\}$",
        "$\\{3;4\\}$",
        "$\\emptyset$"
      ],
      "correct": 2,
      "explanation": "Phần bù $C_X Y = X \\setminus Y = \\{3;4\\}$."
    },
    {
      "id": 36,
      "type": "multiple_choice",
      "question": "Phần bù của $[-2;1)$ trong $\\mathbb{R}$ là",
      "imageKey": "Q36",
      "options": [
        "$(-\\infty;1]$",
        "$(-\\infty;-2) \\cup [1;+\\infty)$",
        "$(-\\infty;-2)$",
        "$(2;+\\infty)$"
      ],
      "correct": 1,
      "explanation": "$C_\\mathbb{R} [-2;1) = (-\\infty;-2) \\cup [1;+\\infty)$."
    },
    {
      "id": 37,
      "type": "multiple_choice",
      "question": "Tìm mệnh đề sai.",
      "imageKey": "Q37",
      "options": [
        "$A \\setminus \\emptyset = \\emptyset$, với mọi tập A.",
        "$A \\cup \\emptyset = A$, với mọi tập A.",
        "$A \\cap \\emptyset = \\emptyset$, với mọi tập A.",
        "$A \\cap A = A$, với mọi tập A."
      ],
      "correct": 0,
      "explanation": "Mệnh đề A sai vì $A \\setminus \\emptyset = A$ chứ không phải $\\emptyset$."
    },
    {
      "id": 38,
      "type": "multiple_choice",
      "question": "Một lớp học có 25 học sinh giỏi môn Toán, 23 học sinh giỏi môn Lý, 14 học sinh giỏi cả môn Toán và Lý và có 6 học sinh không giỏi môn nào cả. Hỏi lớp đó có bao nhiêu học sinh?",
      "imageKey": "Q38",
      "options": [
        "54",
        "40",
        "26",
        "68"
      ],
      "correct": 1,
      "explanation": "Số học sinh = $(25 + 23 - 14) + 6 = 34 + 6 = 40$ học sinh."
    },
    {
      "id": 39,
      "type": "multiple_choice",
      "question": "Lớp 10A có 45 học sinh trong đó có 25 em học giỏi môn Toán, 23 em học giỏi môn Lý, 20 em học giỏi môn Hóa, 11 em học giỏi cả môn Toán và môn Lý, 8 em học giỏi cả môn Lý và môn Hóa, 9 em học giỏi cả môn Toán và môn Hóa. Hỏi lớp 10A có bao nhiêu bạn học giỏi cả ba môn Toán, Lý, Hóa, biết rằng mỗi học sinh trong lớp học giỏi ít nhất một trong 3 môn Toán, Lý, Hóa?",
      "imageKey": "Q39",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correct": 2,
      "explanation": "Sử dụng công thức bao hàm - loại trừ: $45 = 25+23+20 - (11+8+9) + x \\Rightarrow 45 = 40 + x \\Rightarrow x = 5$."
    },
    {
      "id": 40,
      "type": "multiple_choice",
      "question": "Cho $\\Delta ABC$ có $AB=4$; $AC=6$; $\\widehat{A}=120^\\circ$. Độ dài cạnh $BC$ là",
      "imageKey": "Q40",
      "options": [
        "$\\sqrt{19}$",
        "$3\\sqrt{19}$",
        "$2\\sqrt{19}$",
        "$2\\sqrt{7}$"
      ],
      "correct": 2,
      "explanation": "$BC^2 = 4^2 + 6^2 - 2 \\cdot 4 \\cdot 6 \\cdot \\cos(120^\\circ) = 16 + 36 + 24 = 76 \\Rightarrow BC = \\sqrt{76} = 2\\sqrt{19}$."
    },
    {
      "id": 41,
      "type": "multiple_choice",
      "question": "Cho tam giác $ABC$ có ba cạnh $a=5$, $b=6$, $c=7$. Tính côsin góc A.",
      "imageKey": "Q41",
      "options": [
        "$\\frac{5}{7}$",
        "$\\frac{2}{21}$",
        "$\\frac{55}{42}$",
        "$\\frac{10}{7}$"
      ],
      "correct": 0,
      "explanation": "$\\cos A = \\frac{b^2+c^2-a^2}{2bc} = \\frac{36+49-25}{2 \\cdot 6 \\cdot 7} = \\frac{60}{84} = \\frac{5}{7}$."
    },
    {
      "id": 42,
      "type": "multiple_choice",
      "question": "Tam giác $ABC$ có: $a=5$; $b=3$; $c=5$. Số đo của góc BAC là",
      "imageKey": "Q42",
      "options": [
        "$\\widehat{A}>60^\\circ$",
        "$\\widehat{A}=30^\\circ$",
        "$\\widehat{A}=45^\\circ$",
        "$\\widehat{A}=90^\\circ$"
      ],
      "correct": 0,
      "explanation": "$\\cos A = \\frac{3^2+5^2-5^2}{2 \\cdot 3 \\cdot 5} = \\frac{9}{30} = 0{,}3 < 0{,}5 \\Rightarrow \\widehat{A} > 60^\\circ$."
    },
    {
      "id": 43,
      "type": "multiple_choice",
      "question": "Cho hình vuông $ABCD$ cạnh $3\\text{ cm}$. Tính độ dài đường chéo $AC$.",
      "imageKey": "Q43",
      "options": [
        "$3\\sqrt{2}$",
        "$2\\sqrt{2}$",
        "3",
        "$2\\sqrt{3}$"
      ],
      "correct": 0,
      "explanation": "Độ dài đường chéo hình vuông cạnh $a$ là $a\\sqrt{2} = 3\\sqrt{2}\\text{ cm}$."
    },
    {
      "id": 44,
      "type": "multiple_choice",
      "question": "Cho $\\Delta ABC$ có $AB=5$, $\\widehat{A}=40^\\circ$, $\\widehat{B}=60^\\circ$. Độ dài $BC$ gần nhất với kết quả nào?",
      "imageKey": "Q44",
      "options": [
        "3,1",
        "3,7",
        "3,5",
        "3,8"
      ],
      "correct": 0,
      "explanation": "Góc $C = 180^\\circ - 40^\\circ - 60^\\circ = 80^\\circ$. Áp dụng định lý sin: $BC = \\frac{AB \\cdot \\sin A}{\\sin C} = \\frac{5 \\cdot \\sin 40^\\circ}{\\sin 80^\\circ} \\approx 3{,}26$ (gần $3{,}1$ nhất trong các phương án)."
    },
    {
      "id": 45,
      "type": "multiple_choice",
      "question": "Muốn đo chiều cao của tháp chàm Po Klong Garai ở Ninh Thuận người ta lấy hai điểm A và B trên mặt đất có khoảng cách $AB=12\\text{ m}$ cùng thẳng hàng với chân C của tháp để đặt hai giác kế. Chân của giác kế có chiều cao $h = 1{,}3\\text{ m}$. Gọi D là đỉnh tháp và hai điểm $A_1, B_1$ cùng thẳng hàng với $C_1$ thuộc chiều cao CD của tháp. Người ta đo được góc $\\widehat{DA_1C_1}=49^\\circ$ và $\\widehat{DB_1C_1}=35^\\circ$. Tính chiều cao CD của tháp.",
      "imageKey": "Q45",
      "options": [
        "21,77 m",
        "22,77 m",
        "21,47 m",
        "20,47 m"
      ],
      "correct": 1,
      "explanation": "$DC_1 = \\frac{A_1B_1}{\\cot 35^\\circ - \\cot 49^\\circ} = \\frac{12}{\\cot 35^\\circ - \\cot 49^\\circ} \\approx 21{,}47\\text{ m} \\Rightarrow CD = 21{,}47 + 1{,}3 = 22{,}77\\text{ m}$."
    },
    {
      "id": 46,
      "type": "multiple_choice",
      "question": "Thống kê số cuốn sách mỗi bạn trong lớp đọc trong tháng 1 năm 2025, lớp 10A thu được kết quả như bảng sau:\n\n$$\\begin{array}{|c|c|c|c|c|c|}\\hline \\text{Số cuốn sách} & 1 & 2 & 3 & 4 & 5 \\\\\\hline \\text{Số bạn} & 3 & 5 & 15 & 10 & 7 \\\\\\hline \\end{array}$$\n\nHỏi trong tháng 1 năm 2025 trung bình mỗi bạn đọc bao nhiêu cuốn sách?",
      "imageKey": "Q46",
      "options": [
        "3,325",
        "3,3",
        "3",
        "3,5"
      ],
      "correct": 0,
      "explanation": "$\\bar{x} = \\frac{1 \\cdot 3 + 2 \\cdot 5 + 3 \\cdot 15 + 4 \\cdot 10 + 5 \\cdot 7}{3 + 5 + 15 + 10 + 7} = \\frac{133}{40} = 3{,}325$."
    },
    {
      "id": 47,
      "type": "multiple_choice",
      "question": "Người ta đo chiều dài của 7 con cá voi trưởng thành trong bể nuôi như sau: 53, 48, 51, 53, 52, 53, 52. Tìm trung vị của mẫu số liệu trên.",
      "imageKey": "Q47",
      "options": [
        "53,5",
        "52,5",
        "53",
        "52"
      ],
      "correct": 3,
      "explanation": "Sắp xếp mẫu số liệu: 48, 51, 52, 52, 53, 53, 53. Trung vị $Me = 52$."
    },
    {
      "id": 48,
      "type": "multiple_choice",
      "question": "Trong mặt phẳng tọa độ Oxy, cho vectơ $\\vec{OM}=\\vec{i}-2\\vec{j}$. Khi đó tọa độ của điểm M là",
      "imageKey": "Q48",
      "options": [
        "$M(1;-2)$",
        "$M(1;2)$",
        "$M(0;-2)$",
        "$M(-1;2)$"
      ],
      "correct": 0,
      "explanation": "Tọa độ điểm M chính là hệ số của các vectơ đơn vị $\\vec{i}, \\vec{j}$, tức là $M(1;-2)$."
    },
    {
      "id": 49,
      "type": "multiple_choice",
      "question": "Trong mặt phẳng tọa độ Oxy, cho vectơ $\\vec{a}=-2\\vec{j}$. Khi đó tọa độ vectơ $\\vec{a}$ là",
      "imageKey": "Q49",
      "options": [
        "$\\vec{a}=(-2;0)$",
        "$\\vec{a}=(0;-2)$",
        "$\\vec{a}=(-2;-2)$",
        "$\\vec{a}=(2;0)$"
      ],
      "correct": 1,
      "explanation": "Vì không có thành phần $\\vec{i}$ nên hoành độ bằng 0, tung độ bằng $-2$."
    },
    {
      "id": 50,
      "type": "multiple_choice",
      "question": "Trong mặt phẳng tọa độ Oxy, cho các điểm $A(1;2)$, $B(-1;0)$, $C(2;0)$. Tìm tọa độ của điểm D để tứ giác ABCD là hình bình hành.",
      "imageKey": "Q50",
      "options": [
        "$D(4;2)$",
        "$D(0;2)$",
        "$D(0;-2)$",
        "$M(1;2)$"
      ],
      "correct": 0,
      "explanation": "ABCD là hình bình hành $\\Leftrightarrow \\vec{AB} = \\vec{DC} \\Leftrightarrow (-2; -2) = (2 - x_D; -y_D) \\Rightarrow D(4;2)$."
    },
    {
      "id": 51,
      "type": "multiple_choice",
      "question": "Trên mặt phẳng tọa độ Oxy, cho 4 điểm $A(3;0)$, $B(4;-3)$, $C(8;-1)$, $D(-2;1)$. Ba điểm nào trong bốn điểm đã cho thẳng hàng?",
      "imageKey": "Q51",
      "options": [
        "B, C, D",
        "A, B, C",
        "A, B, D",
        "A, C, D"
      ],
      "correct": 3,
      "explanation": "Ta có $\\vec{AC}=(5;-1)$, $\\vec{AD}=(-5;1) \\Rightarrow \\vec{AD} = -\\vec{AC}$, suy ra A, C, D thẳng hàng."
    },
    {
      "id": 52,
      "type": "multiple_choice",
      "question": "Trong mặt phẳng tọa độ Oxy, biết $\\vec{u}=7\\vec{i}-2\\vec{j}$. Độ dài của vectơ $\\vec{u}$ là",
      "imageKey": "Q52",
      "options": [
        "$\\sqrt{53}$",
        "$3\\sqrt{5}$",
        "$\\sqrt{5}$",
        "3"
      ],
      "correct": 0,
      "explanation": "|\\vec{u}| = \\sqrt{7^2 + (-2)^2} = \\sqrt{49+4} = \\sqrt{53}$."
    },
    {
      "id": 53,
      "type": "multiple_choice",
      "question": "Trong mặt phẳng tọa độ Oxy, cho $\\vec{a}=(-1;2)$, $\\vec{b}=(3;2)$. Tọa độ của vectơ $\\vec{v}=-2\\vec{a}+3\\vec{b}$ là",
      "imageKey": "Q53",
      "options": [
        "$\\vec{v}=(8;2)$",
        "$\\vec{v}=(11;8)$",
        "$\\vec{v}=(11;2)$",
        "$\\vec{v}=(2;4)$"
      ],
      "correct": 2,
      "explanation": "$\\vec{v} = -2(-1;2) + 3(3;2) = (2+9; -4+6) = (11;2)$."
    },
    {
      "id": 54,
      "type": "multiple_choice",
      "question": "Trong mặt phẳng Oxy, cho hai điểm $A(2;2)$, $B(-1;6)$. Tìm tọa độ điểm I sao cho B là trung điểm của đoạn thẳng AI.",
      "imageKey": "Q54",
      "options": [
        "$I\\left(-\\frac{3}{2};2\\right)$",
        "$I(0;14)$",
        "$I(-4;10)$",
        "$I\\left(\\frac{1}{2};4\\right)$"
      ],
      "correct": 2,
      "explanation": "$I = 2B - A = 2(-1;6) - (2;2) = (-4; 10)$."
    },
    {
      "id": 55,
      "type": "multiple_choice",
      "question": "Trong mặt phẳng Oxy, cho 2 điểm $A(-2;-2)$ và $B(5;-4)$. Tọa độ trọng tâm G của tam giác OAB là",
      "imageKey": "Q55",
      "options": [
        "$G(1;-2)$",
        "$G(3;-6)$",
        "$G(-1;-2)$",
        "$G(-1;2)$"
      ],
      "correct": 0,
      "explanation": "$G = \\frac{O+A+B}{3} = \\left(\\frac{0-2+5}{3}; \\frac{0-2-4}{3}\\right) = (1;-2)$."
    },
    {
      "id": 56,
      "type": "multiple_choice",
      "question": "Trong mặt phẳng tọa độ Oxy cho các điểm $A(1;3)$, $B(4;0)$, $C(2;-5)$. Tọa độ điểm M thỏa mãn $\\vec{MA}+\\vec{MB}-3\\vec{MC}=\\vec{0}$ là",
      "imageKey": "Q56",
      "options": [
        "$M(1;18)$",
        "$M(-1;18)$",
        "$M(-18;1)$",
        "$M(1;-18)$"
      ],
      "correct": 3,
      "explanation": "Biến đổi hệ tọa độ suy ra $M = A + B - 3C = (1+4-6; 3+0-3(-5)) = (1; -18)$."
    },
    {
      "id": 57,
      "type": "multiple_choice",
      "question": "Trong mặt phẳng Oxy cho $\\vec{a}=(2;3)$, $\\vec{b}=(4;-1)$. Tích $\\vec{a}\\cdot\\vec{b}$ bằng",
      "imageKey": "Q57",
      "options": [
        "11",
        "5",
        "4",
        "-2"
      ],
      "correct": 1,
      "explanation": "$\\vec{a}\\cdot\\vec{b} = 2 \\cdot 4 + 3 \\cdot (-1) = 8 - 3 = 5$."
    },
    {
      "id": 58,
      "type": "multiple_choice",
      "question": "Trong mặt phẳng Oxy, cho các điểm $A(-4;2)$, $B(2;4)$. Tính độ dài AB.",
      "imageKey": "Q58",
      "options": [
        "$AB=2\\sqrt{10}$",
        "$AB=4$",
        "$AB=40$",
        "$AB=2$"
      ],
      "correct": 0,
      "explanation": "$AB = \\sqrt{(2 - (-4))^2 + (4 - 2)^2} = \\sqrt{36 + 4} = \\sqrt{40} = 2\\sqrt{10}$."
    },
    {
      "id": 59,
      "type": "multiple_choice",
      "question": "Cho tam giác ABC có $A(5;3)$, $B(2;-1)$, $C(-1;5)$. Tìm tọa độ trực tâm H của tam giác ABC.",
      "imageKey": "Q59",
      "options": [
        "$H(-3;2)$",
        "$H(-3;-2)$",
        "$H(3;2)$",
        "$H(3;-2)$"
      ],
      "correct": 2,
      "explanation": "Giải hệ phương trình $\\vec{AH} \\cdot \\vec{BC} = 0$ và $\\vec{BH} \\cdot \\vec{AC} = 0$ thu được $H(3;2)$."
    },
    {
      "id": 60,
      "type": "multiple_choice",
      "question": "Cho $\\Delta ABC$ có $A(0;3)$, $B(1;4)$, $C(6;-1)$. Tìm tọa độ chân đường cao hạ từ đỉnh A của $\\Delta ABC$.",
      "imageKey": "Q60",
      "options": [
        "(1;4)",
        "(1;-2)",
        "(4;1)",
        "(-2;1)"
      ],
      "correct": 0,
      "explanation": "Chân đường cao hạ từ A trùng với điểm B vì tam giác vuông tại B."
    },
    {
      "id": 61,
      "type": "multiple_choice",
      "question": "Số điểm mà năm vận động viên bóng rổ ghi được trong một trận đấu là: $12, 9, 17, 9, 21$. Tứ phân vị $Q_1$ của mẫu số liệu là:",
      "imageKey": "Q61",
      "options": [
        "$Q_1=9$",
        "$Q_1=12$",
        "$Q_1=10,5$",
        "$Q_1=13$"
      ],
      "correct": 0,
      "explanation": "Sắp xếp mẫu: $9, 9, 12, 17, 21$. $Q_2 = 12$. Nửa dưới là $9, 9 \\Rightarrow Q_1 = 9$."
    },
    {
      "id": 62,
      "type": "multiple_choice",
      "question": "Điểm trung bình môn Toán học kì 1 của 6 bạn học sinh như sau: $6,2; 7,4; 7,6; 6,8; 9,1; 8,8$. Tìm tứ phân vị thứ ba của mẫu số liệu trên.",
      "imageKey": "Q62",
      "options": [
        "$Q_3=7,6$",
        "$Q_3=8,8$",
        "$Q_3=8,1$",
        "$Q_3=8,95$"
      ],
      "correct": 1,
      "explanation": "Mẫu đã sắp xếp: $6,2; 6,8; 7,4; 7,6; 8,8; 9,1$. Nửa trên là $7,6; 8,8; 9,1 \\Rightarrow Q_3 = 8,8$."
    },

    // PHẦN II: CÂU HỎI ĐÚNG SAI (4 CÂU)
    {
      "id": 63,
      "type": "true_false",
      "question": "Xét tính đúng, sai của các mệnh đề sau:",
      "imageKey": "Q63",
      "statements": [
        {
          "id": "a",
          "statement": "$\\forall x \\in \\mathbb{R}, x^2 + 1 \\ge 0$",
          "correct": true
        },
        {
          "id": "b",
          "statement": "$\\exists x \\in \\mathbb{R}, x + 2 = x$",
          "correct": false
        },
        {
          "id": "c",
          "statement": "$\\exists x \\in \\mathbb{Q}, 9x^2 - 4 = 0$",
          "correct": true
        },
        {
          "id": "d",
          "statement": "$\\forall x \\in \\mathbb{Q}, 3x^2 - 5 = 0$",
          "correct": false
        }
      ]
    },
    {
      "id": 64,
      "type": "true_false",
      "question": "Cho các tập hợp $A=\\{0;2;3;5\\}$, $B=\\{-1;2;4;5;6\\}$, $C=\\{-2;0;1;3;4\\}$. Xét tính đúng sai của các mệnh đề sau:",
      "imageKey": "Q64",
      "statements": [
        {
          "id": "a",
          "statement": "$A \\cap B = \\{2;5\\}$",
          "correct": true
        },
        {
          "id": "b",
          "statement": "$A \\cup B = \\{-1;0;2;3;5;6\\}$",
          "correct": false
        },
        {
          "id": "c",
          "statement": "$B \\cap C = \\{2;3;4\\}$",
          "correct": false
        },
        {
          "id": "d",
          "statement": "$B \\cup C = \\{-2;-1;0;1;2;3;4;5;6\\}$",
          "correct": true
        }
      ]
    },
    {
      "id": 65,
      "type": "true_false",
      "question": "Cho các tập hợp $A=\\{x \\in \\mathbb{R} \\mid x \\le 3\\}$, $B=\\{x \\in \\mathbb{R} \\mid -3 < x < 5\\}$, $C=[3;+\\infty)$. Xét tính đúng sai của các mệnh đề sau:",
      "imageKey": "Q65",
      "statements": [
        {
          "id": "a",
          "statement": "$A \\cap B = (-3;3]$",
          "correct": true
        },
        {
          "id": "b",
          "statement": "$A \\cup B = (-\\infty;5]$",
          "correct": false
        },
        {
          "id": "c",
          "statement": "$A \\cap C = \\emptyset$",
          "correct": false
        },
        {
          "id": "d",
          "statement": "$B \\cup C = (-3;+\\infty)$",
          "correct": true
        }
      ]
    },
    {
      "id": 66,
      "type": "true_false",
      "question": "Cho ba điểm $A(1;-2)$, $B(0;4)$, $C(3;2)$. Xét tính đúng sai của các khẳng định sau:",
      "imageKey": "Q66",
      "statements": [
        {
          "id": "a",
          "statement": "$\\vec{AB}=(-1;6)$",
          "correct": true
        },
        {
          "id": "b",
          "statement": "$\\vec{AC}=(2;4)$ và $\\vec{BC}=(3;-2)$",
          "correct": true
        },
        {
          "id": "c",
          "statement": "Tọa độ trung điểm của đoạn AB là $I\\left(\\frac{1}{2};1\\right)$",
          "correct": true
        },
        {
          "id": "d",
          "statement": "Tọa độ điểm N sao cho $\\vec{AN}+2\\vec{BN}-4\\vec{CN}=\\vec{0}$ là $N(11;12)$",
          "correct": false
        }
      ]
    },

    // PHẦN III: CÂU HỎI TRẢ LỜI NGẮN (5 CÂU)
    {
      "id": 67,
      "type": "short_answer",
      "question": "Cho tập hợp $A=[-3;1) \\cup (0;2026)$. Tập hợp A có bao nhiêu giá trị nguyên?",
      "imageKey": "Q67",
      "correctAnswer": "2029",
      "explanation": "Các số nguyên thuộc A bao gồm $\\{-3, -2, -1, 0\\} \\cup \\{1, 2, \\dots, 2025\\}$. Tương ứng $4 + 2025 = 2029$ số nguyên."
    },
    {
      "id": 68,
      "type": "short_answer",
      "question": "Cho hai tập hợp khác rỗng $A=(m-1;4]$ và $B=(-2;2m+2)$ với $m \\in \\mathbb{R}$. Có bao nhiêu giá trị nguyên dương của tham số $m$ để $A \\cap B \\ne \\emptyset$?",
      "imageKey": "Q68",
      "correctAnswer": "4",
      "explanation": "Giải điều kiện $A \\cap B \\ne \\emptyset$ với $m$ nguyên dương thu được 4 giá trị thỏa mãn $m \\in \\{1, 2, 3, 4\\}$."
    },
    {
      "id": 69,
      "type": "short_answer",
      "question": "Trong mặt phẳng tọa độ Oxy cho tam giác ABC có $A(1;0)$, $B(-1;1)$, $C(5;-1)$. Tọa độ trực tâm $H(a;b)$ của tam giác ABC. Tính $a+b$.",
      "imageKey": "Q69",
      "correctAnswer": "-35",
      "explanation": "Giải hệ $\\vec{AH} \\cdot \\vec{BC} = 0$ và $\\vec{BH} \\cdot \\vec{AC} = 0$ thu được $a=-19, b=-16 \\Rightarrow a+b = -35$."
    },
    {
      "id": 70,
      "type": "short_answer",
      "question": "Điểm kiểm tra môn văn của bạn Bình được ghi lại như sau: 6, 7, 9, 8, 7, 8, 9, 8. Độ lệch chuẩn của điểm kiểm tra môn văn của bạn Bình là (làm tròn đến 2 chữ số thập phân):",
      "imageKey": "Q70",
      "correctAnswer": "0,97",
      "explanation": "Tính độ lệch chuẩn của mẫu số liệu thu được kết quả $s \\approx 0{,}97$."
    },
    {
      "id": 71,
      "type": "short_answer",
      "question": "Một mảnh đất hình chữ nhật bị xén đi một góc như hình minh họa, phần còn lại có dạng hình tứ giác ABCD với độ dài các cạnh là $AB=15\\text{ m}$, $BC=19\\text{ m}$, $CD=10\\text{ m}$ và $DA=20\\text{ m}$. Diện tích mảnh đất ABCD bằng bao nhiêu mét vuông (làm tròn kết quả đến hàng đơn vị)?",
      "imageKey": "Q71",
      "correctAnswer": "236",
      "explanation": "Tính diện tích tứ giác ABCD thu được kết quả làm tròn là $236\\text{ m}^2$."
    }
  ]
};
