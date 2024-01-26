// img profileUser
const profileUser1 = {name:"other user1", img:'https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
const profileUser2 = {name:'other user2',img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
const profileUser3 = {name:'other user3',img:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
const profileUser4 = {name:'other user4',img:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
const profileUser5 = {name:'other user5',img:'https://images.unsplash.com/photo-1577912646606-9485d891c7ae?q=80&w=965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
const profileUser6 = {name:'other user6',img:'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}




export const Data = [
        {
            name: profileUser1.name,
            userphoto: profileUser1.img,
            storyImg: 'https://images.unsplash.com/photo-1705615502461-032a467f0fc8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            post:[{
                    name:profileUser1.name,
                    userphoto:profileUser1.img,
                    photopost:'https://media.istockphoto.com/id/1445112427/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%99%E0%B9%8D%E0%B8%B2%E0%B8%98%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B9%8D%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88%E0%B9%83%E0%B8%99%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%99%E0%B9%8D%E0%B8%B2%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%A5%E0%B8%B8%E0%B9%80%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%9C%E0%B8%B9.jpg?s=612x612&w=0&k=20&c=1oTEt8TAyPToKEbCq7XoB9T4-M288wGfNN35p_JR3E8=',
                    textpost:'Hello i guess, i like you! People who like this post',
                    reaction: [
                        { name: 'like',count: 50, emoji:'https://www.nicepng.com/png/detail/8-89515_new-svg-image-facebook-like-emoji-png.png'},
                        { name: 'love',count: 5, emoji:'https://clipart.info/images/ccovers/1513313791facebook-circle-heart-love-png.png'},
                        { name: 'care',count: 9, emoji:'https://image.similarpng.com/very-thumbnail/2020/11/Yellow-emoji-hugging-red-heart-on-transparent-background-PNG.png'},
                        { name: 'haha',count: 0, emoji:'https://www.pngarts.com/files/11/Haha-Emoji-PNG-High-Quality-Image.png'},
                        { name: 'wow',count: 8, emoji:'https://iconape.com/wp-content/files/ev/58990/png/facebook-reaction-wow.png'},
                        { name: 'sad',count: 0, emoji:'https://tse2.mm.bing.net/th?id=OIP.99UyvYmVT9c5Ao0kuY4uLAHaHZ&pid=Api&P=0&h=180'},
                        { name: 'angry',count: 0, emoji:'https://www.pinclipart.com/picdir/big/32-324748_angry-clipart.png'},
                    ],
                    sharecount: 50,
                    comment:77,
                  },
                  { 
                    name:profileUser1.name,
                    userphoto: profileUser1.img,
                    photopost:'https://media.istockphoto.com/id/1445435104/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%99%E0%B9%8D%E0%B8%B2%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%A2%E0%B8%B4%E0%B9%89%E0%B8%A1%E0%B9%80%E0%B8%9C%E0%B8%8A%E0%B8%B4%E0%B8%8D%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B9%86-%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%AB%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B9%84%E0%B8%9F%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%84%E0%B8%99%E0%B8%AD%E0%B8%B7%E0%B9%88%E0%B8%99-%E0%B9%86-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88.jpg?s=612x612&w=0&k=20&c=iMLZ9eGP3VVNb1S7Of6at7G3WAFuEC0PVLLU1Pi8Cho=',
                    textpost:'Embarking on a new professional journey is a thrilling experience, filled with anticipation, excitement, and perhaps a hint of nervousness. Joining a new workplace offers a fresh start, new opportunities, and a chance for personal and career growth. In this article, we explore the dynamics of joining a new work, offering insights and tips for a smooth transition into a new chapter of your professional life.',
                      reaction: [
                        { name: 'like',count: 20, emoji:'https://www.nicepng.com/png/detail/8-89515_new-svg-image-facebook-like-emoji-png.png'},
                        { name: 'love',count: 5, emoji:'https://clipart.info/images/ccovers/1513313791facebook-circle-heart-love-png.png'},
                        { name: 'care',count: 0, emoji:'https://image.similarpng.com/very-thumbnail/2020/11/Yellow-emoji-hugging-red-heart-on-transparent-background-PNG.png'},
                        { name: 'haha',count: 0, emoji:'https://www.pngarts.com/files/11/Haha-Emoji-PNG-High-Quality-Image.png'},
                        { name: 'wow',count: 6, emoji:'https://iconape.com/wp-content/files/ev/58990/png/facebook-reaction-wow.png'},
                        { name: 'sad',count: 0, emoji:'https://tse2.mm.bing.net/th?id=OIP.99UyvYmVT9c5Ao0kuY4uLAHaHZ&pid=Api&P=0&h=180'},
                        { name: 'angry',count: 0, emoji:'https://www.pinclipart.com/picdir/big/32-324748_angry-clipart.png'},
                    ],
                    sharecount: 10,
                    comment:40,
                  }],
            
        },
        {
            name: profileUser2.name,
            userphoto: profileUser2.img,
            storyImg: 'https://images.unsplash.com/photo-1705648462708-ffadf36617ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            post:[{
                    name:profileUser2.name,
                    userphoto:profileUser2.img,
                    photopost:'https://media.istockphoto.com/id/1700212461/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%8A%E0%B8%B4%E0%B8%81%E0%B9%83%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A7-%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C%E0%B9%83%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A7-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%A0%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%97.jpg?s=612x612&w=0&k=20&c=u_tS0CCQMmS5NbGNaTdoKOMKs58TOvxbKDW83f1XpAQ=',
                    textpost:'Hello i still happy',
                    reaction: [
                        { name: 'like',count: 100, emoji:'https://www.nicepng.com/png/detail/8-89515_new-svg-image-facebook-like-emoji-png.png'},
                        { name: 'love',count: 5, emoji:'https://clipart.info/images/ccovers/1513313791facebook-circle-heart-love-png.png'},
                        { name: 'care',count: 9, emoji:'https://image.similarpng.com/very-thumbnail/2020/11/Yellow-emoji-hugging-red-heart-on-transparent-background-PNG.png'},
                        { name: 'haha',count: 1, emoji:'https://www.pngarts.com/files/11/Haha-Emoji-PNG-High-Quality-Image.png'},
                        { name: 'wow',count: 80, emoji:'https://iconape.com/wp-content/files/ev/58990/png/facebook-reaction-wow.png'},
                        { name: 'sad',count: 1, emoji:'https://tse2.mm.bing.net/th?id=OIP.99UyvYmVT9c5Ao0kuY4uLAHaHZ&pid=Api&P=0&h=180'},
                        { name: 'angry',count: 1, emoji:'https://www.pinclipart.com/picdir/big/32-324748_angry-clipart.png'},
                    ],
                    sharecount: 80,
                    comment:90,
                  }],
        },
        {
            name: profileUser3.name,
            userphoto: profileUser3.img,
            storyImg: 'https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            post:[]
        },
        {
            name: profileUser4.name,
            userphoto: profileUser4.img,
            storyImg: 'https://images.unsplash.com/photo-1705310683793-69a58304e5ce?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            post:[{
                    name:profileUser4.name,
                    userphoto:profileUser4.img,
                    photopost:'https://media.istockphoto.com/id/1311750182/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B9%83%E0%B8%88%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%B2%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B9%E0%B9%89%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%B1%E0%B8%94%E0%B9%81%E0%B8%A2%E0%B9%89%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AB%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94.jpg?s=612x612&w=0&k=20&c=m2SYqbMy66m1lPRSau_pPwBzQ3BSQGjkVdmCTukKb6k=',
                    textpost:'Sadness is an inherent aspect of the human experience, a complex emotion that we all encounter at various points in our lives. While it can be a challenging emotion to navigate, understanding and acknowledging sadness is essential for our emotional well-being. In this article, we explore the nature of sadness, its potential causes, coping mechanisms, and the path towards finding hope in difficult times.',
                    reaction: [
                        { name: 'like',count: 10, emoji:'https://www.nicepng.com/png/detail/8-89515_new-svg-image-facebook-like-emoji-png.png'},
                        { name: 'love',count: 0, emoji:'https://clipart.info/images/ccovers/1513313791facebook-circle-heart-love-png.png'},
                        { name: 'care',count: 9, emoji:'https://image.similarpng.com/very-thumbnail/2020/11/Yellow-emoji-hugging-red-heart-on-transparent-background-PNG.png'},
                        { name: 'haha',count: 0, emoji:'https://www.pngarts.com/files/11/Haha-Emoji-PNG-High-Quality-Image.png'},
                        { name: 'wow',count: 0, emoji:'https://iconape.com/wp-content/files/ev/58990/png/facebook-reaction-wow.png'},
                        { name: 'sad',count: 10, emoji:'https://tse2.mm.bing.net/th?id=OIP.99UyvYmVT9c5Ao0kuY4uLAHaHZ&pid=Api&P=0&h=180'},
                        { name: 'angry',count: 0, emoji:'https://www.pinclipart.com/picdir/big/32-324748_angry-clipart.png'},
                    ],
                    sharecount: 10,
                    comment:12,
                  }]
        },
        {
            name: profileUser5.name,
            userphoto: profileUser5.img,
            storyImg: 'https://images.unsplash.com/photo-1705518648497-e4ea72bcb27d?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            post:[{
                    name:profileUser5.name,
                    userphoto:profileUser5.img,
                    photopost:'https://media.istockphoto.com/id/1386672264/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%95%E0%B8%B8%E0%B9%8A%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B9%83%E0%B8%99%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%A3%E0%B8%AD%E0%B8%A2%E0%B8%A2%E0%B8%B4%E0%B9%89%E0%B8%A1%E0%B8%97%E0%B8%B2%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%94%E0%B9%83%E0%B8%99%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%A7%E0%B8%B2%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B9%84%E0%B8%97%E0%B8%99%E0%B9%8C%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%9F%E0%B9%89%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=3NfZLO6rJIVf-CKnCffYhcrARhOrotsEqGqufuRmwRE=',
                    textpost:'Love, an intricate tapestry woven through the fabric of human existence, is a force that transcends time and space. It is an emotion that binds us together, offering solace in moments of despair and creating joy in times of celebration. In this exploration of love, we delve into its multifaceted nature, examining the various forms it takes and the profound impact it has on our lives.',
                    reaction: [
                        { name: 'like',count: 10, emoji:'https://www.nicepng.com/png/detail/8-89515_new-svg-image-facebook-like-emoji-png.png'},
                        { name: 'love',count: 5, emoji:'https://clipart.info/images/ccovers/1513313791facebook-circle-heart-love-png.png'},
                        { name: 'care',count: 0, emoji:'https://image.similarpng.com/very-thumbnail/2020/11/Yellow-emoji-hugging-red-heart-on-transparent-background-PNG.png'},
                        { name: 'haha',count: 0, emoji:'https://www.pngarts.com/files/11/Haha-Emoji-PNG-High-Quality-Image.png'},
                        { name: 'wow',count: 80, emoji:'https://iconape.com/wp-content/files/ev/58990/png/facebook-reaction-wow.png'},
                        { name: 'sad',count: 0, emoji:'https://tse2.mm.bing.net/th?id=OIP.99UyvYmVT9c5Ao0kuY4uLAHaHZ&pid=Api&P=0&h=180'},
                        { name: 'angry',count: 0, emoji:'https://www.pinclipart.com/picdir/big/32-324748_angry-clipart.png'},
                    ],
                    sharecount: 80,
                    comment:90,
                  }],
        },
        {
            name: profileUser6.name,
            userphoto: profileUser6.img,
            storyImg: 'https://images.unsplash.com/photo-1682687979601-082a1295b78f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            post:[]
        },  
        {
            name: profileUser6.name,
            userphoto: profileUser6.img,
            storyImg: 'https://images.unsplash.com/photo-1682687979601-082a1295b78f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            post:[]
        },
        {
            name: profileUser6.name,
            userphoto: profileUser6.img,
            storyImg: 'https://images.unsplash.com/photo-1682687979601-082a1295b78f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            post:[]
        },
      {
            name: profileUser6.name,
            userphoto: profileUser6.img,
            storyImg: 'https://images.unsplash.com/photo-1682687979601-082a1295b78f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            post:[]
        },
       {
            name: profileUser6.name,
            userphoto: profileUser6.img,
            storyImg: 'https://images.unsplash.com/photo-1682687979601-082a1295b78f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            post:[]
        },
    ]