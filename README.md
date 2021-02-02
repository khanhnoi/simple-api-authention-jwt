# Build 1 API Authention JWT đơn giản ExpressJS NodeJS

Thực ra mình thích FE. nhưng BE cũng rất thú vị. Cái ni giúp mình test ôn lại khá nhiều thứ.
dotenv, MongoDB, JWT với jsonwebtoken, validate với Joi, mã hoá password với bcryptjs,...

Download: [File Json test PostMan](http://khanhnoi.mobie.in/json/Test%20API%20Authentication%20JWT%20.postman_collection.json)
Cách tải file .Json bằng url rất dễ. Bạn chỉ cần Ctrl - S là được.

```bash
# development
$ npm init -y
$ npm i express
$ npm i nodemon -D
$ npm i mongoose

```
```bash
# package.json
"scripts": {
        "start": "nodemon index.js"
    },

```

Hôm nay tôi mới chợt nhận ra bố tôi đã già yếu và tôi có thể xa ông ấy bất cứ lúc nào. Suy nghĩ đó đã từng nhiều lần xuất hiện nhưng tôi cố lờ đi. Cuộc sống tôi đầy những rắc rối và tôi chỉ tập trung vào nó và chẳng nhận ra những rắc rồi đó chả là gì nếu 1 ngày ta mất đi người ta yêu thương. 

Tôi vẫn chỉ là 1 thằng ranh chưa có đủ kinh nghiệm sống. Một lần Fb tôi đã thấy mẹ tôi dc tag vào 1 bài viết về ung thư người già. Tôi đủ thông minh hiểu được có gì đó vs gia đinh mình. Tôi gọi mẹ hỏi gia dịnh mình có ai bênh gì ko? Mẹ tôi nói ko? 
Nhưng giọng mẹ ko vui đã đủ tôi hiểu. Bố bị bệnh . 
Bố tôi từng rất mập và tôi hay khịa ô vì điều đó . và hôm nay vì covid là 1 lý do tôi về sớm. Thực ra tôi chả bao giờ có hứng thú về nhà. Thời đi học tôi chả có gì gọi là kỉ niệm. Nhưng năm nay tôi về sớm.

Ông ấy gầy đi 1 cách đáng sợ. Và tôi ăn cơm tôi còn ko dám nhìn vào bô mẹ. Nó rất "đau đớn". Tôi luôn nghĩ bố tôi rất khoẻ, ko sơ cái "già". Và tôi đã sai. Ko ai chiến thắng tuổi già cả.
Tôi ko cố gắng cản ô uóng rượu hay làm những thứ nguy hiểm. Tôi chỉ nói "ko nên" đúng nghĩ 1 đứa con "phải" nói những lời đó? Giờ tôi đã hiểu bố sẽ ko ở bên tôi mãi mãi. Và mẹ cũng vậy.

Tôi đã bỏ bê học hành, thích ngủ vì khi ngủ có thể trốn tránh thực tại, chơi game để ko suy nghĩ về những buồn phiền, "cam ghét" bố mẹ vì họ ko giúp tôi trở thành con người tôi muốn.

Họ ko phải là bố me hoàn hảo. Họ nuôi dạy chúng tôi sai cách. Khiến 2 đứa bọn tôi yếu kém đi so vs nhưng j mà chúng tôi có thể đạt dc. Nhưng ko có họ tôi chả thể sống dc đến giờ.

Từ bao giờ tôi luôn tỏ ra thái độ, khuôn mặt ko vui khi về nhà. "Về nhà" lúc tết là hiện nhiên vì ai cũng làm vậy. BM tôi chắc cũng cảm nhận dc sự "ko nhớ cha mẹ, gia đình" của tôi. BM họ cảm nhận cái "chán" của tôi khi tôi đã cô gắng nhưng thất bại.
Có phải do tôi mà bố bị bệnh. Hay ông trời đang muốn thử tôi? Bố bị bênh nhưng giờ tôi vẫn mặt lạnh lùng vs BM. Nhưng tôi đang khóc trong lòng. 

Giờ tôi ko nên làm họ buồn hay lo sợ vì tôi nữa. Ngày trước, tôi đã tự nhủ "BM trước khi đi, họ sẽ phải hối hận vì đã sai khi đối xử vs tôi ko tốt". Chắc giờ tôi nên sửa lại "BM trước khi đi, họ  sẽ phải hối hận vì đã sai khi đối xử vs tôi ko tốt và mỉm cười, thanh thản vì tôi vẫn trưởng thành dù điều đó xảy ra"

Lần cuối tôi nghiêm túc chắc từ lớp 11 nhỉ. Liệu tôi có thể lấy lại ngọn lửa đó 1 lần nữa để thắp sáng trái tim tôi. Và Bố và mẹ cũng sẽ ấm áp bởi ngọn lửa đó
