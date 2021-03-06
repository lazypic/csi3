# DB관리

### DB백업 및 복원(DB마이그레이션)

백업

```bash
$ mongodump -o /dbdump/20200528
```

복원

```bash
$ mongorestore --drop /dbdump/20200528
```


### DB체크 : DB 부하체크하기
- http://127.0.0.1:28017

### DB체크 : DB에 들어간 값을 RestAPI를 이용해서 관찰하기
- db시작시 --rest 옵션을 붙히면 웹에서 json데이터를 관찰할 수 있다.

```
http://127.0.0.1:28017/project/projectname/
```

### 프로젝트 하나를 bson으로 백업하기
추후 분석을 위해서 프로젝트를 `.bson`으로 백업합니다.

```bash
$ mongodump --db project --collection TEMP --out /backupdb/TEMP
```

### AWS 백업
DB는 클라우드에 백업하는 것을 추천합니다. 먼저 awscli를 설치합니다.

```bash
$ pip3 install awscli --upgrade --user
```

crontab에 백업스크립트를 등록합니다.
백업이 되지 않을 때를 대비해 확인할 log처리도 해둡니다.

```bash
$ crontab -e
* 3 * * * sh /Users/woong/csi3/script/backup_aws.sh >> /tmp/cron.out 2>&1
```

