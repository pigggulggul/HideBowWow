const { text } = require('express');
const { Server } = require('socket.io');

const io = new Server({
    cors: {
        origin: '*',
    },
});

io.listen(4000);

const players = [];
const room = {
    time: 90,
    roomState: 0,
    roomTitle: '',
    roomPassword: '',
    isPublic: false,
    roomMap: 0,
    roomId: '',
    roomAdmin: '',
    roomPlayers: [''],
};

io.on('connection', (socket) => {
    console.log('연결됨!');

    io.emit('players', players);

    socket.on(
        'initialize',
        ({ tempNickname, tempJobPosition, selectedCharacterGlbNameIndex }) => {
            const newPlayer = {
                id: socket.id,
                position: [0, 0, 0],
                // lookPosition: [0, 0, 0],
                nickname: tempNickname,
                // jobPosition: tempJobPosition,
                // selectedCharacterGlbNameIndex,
                selectedIndex: -1,
                isDead: false,
                isSeeker: false,
                // isFixed: false,
                // myRoom: {
                //     objects: [],
                // },
            };
            players.push(newPlayer);

            console.log(newPlayer);

            socket.emit(
                'initialize',
                players.find((p) => p.id === socket.id)
            );

            io.emit('enter', {
                id: socket.id,
                nickname: newPlayer.nickname,
                jobPosition: newPlayer.jobPosition,
            });

            io.emit('players', players);
        }
    );

    socket.on('move', (position) => {
        console.log('players', players);
        const player = players.find((p) => p.id === socket.id);
        if (player) {
            player.position = position;
            io.emit('players', players);
        }
    });
    socket.on('newText', (text) => {
        const sender = players.find((p) => p.id === socket.id);
        if (sender) {
            const { id, nickname, jobPosition } = sender;
            if (nickname && jobPosition) {
                io.emit('newText', {
                    senderId: id,
                    senderNickName: nickname,
                    senderJobPosition: jobPosition,
                    text,
                    timestamp: new Date(),
                });
            }
        }
    });

    socket.on('myRoomChange', (myRoom, otherPlayerId) => {
        console.log('방이 바뀌었나?');
        const id = otherPlayerId || socket.id;
        const player = players.find((p) => p.id === id);
        player.myRoom = myRoom;
        io.emit('players', players);
    });

    socket.on('roundStart', () => {
        console.log('라운드가 시작되었습니다.');
        room.roomState = 2;
        // 플레이어 초기화
        players.map((player) => {
            player.isDead = false;
            player.isSeeker = false;
            player.selectedIndex = -1;
            player.isFixed = false;
        });
        // 플레이어 인원수 분배 0~players.length까지. 일단 술래는 무조건 1명
        // 초기화 해주고 캐릭터도 초기화
        const seeker = Math.floor(Math.random() * players.length);
        players[seeker].isSeeker = true;
        players[seeker].selectedIndex = Math.floor(Math.random() * 3);
        io.emit('players', players);
        io.emit('roundStart', room);
        console.log(room);
        console.log(players);
    });
    socket.on('roundFinish', () => {
        room.roomState = 3;
        console.log('라운드가 끝났습니다.');
        io.emit('roundFinish', room);
    });

    socket.on('disconnecting', () => {
        console.log('연결이 끊어지는 중!');
        const player = players.find((p) => p.id === socket.id);
        if (player) {
            io.emit('exit', {
                id: socket.id,
                nickname: player.nickname,
                jobPosition: player.jobPosition,
            });
        }
    });

    socket.on('disconnect', () => {
        console.log('연결이 끊어짐!');
        players.splice(
            players.findIndex((p) => p.id === socket.id),
            1
        );
        io.emit('players', players);
    });
});