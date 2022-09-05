import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { TreeConditionController } from "../treeCondition.controller";
import { TreeConditionService } from "../treeCondition.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  acidity: 42.42,
  createdAt: new Date(),
  estimatedLifeSpane: 42.42,
  id: "exampleId",
  others: "exampleOthers",
  plantingSeason: "examplePlantingSeason",
  rootType: "exampleRootType",
  soilContent: "exampleSoilContent",
  soilDepth: 42.42,
  updatedAt: new Date(),
  waterAmount: 42.42,
};
const CREATE_RESULT = {
  acidity: 42.42,
  createdAt: new Date(),
  estimatedLifeSpane: 42.42,
  id: "exampleId",
  others: "exampleOthers",
  plantingSeason: "examplePlantingSeason",
  rootType: "exampleRootType",
  soilContent: "exampleSoilContent",
  soilDepth: 42.42,
  updatedAt: new Date(),
  waterAmount: 42.42,
};
const FIND_MANY_RESULT = [
  {
    acidity: 42.42,
    createdAt: new Date(),
    estimatedLifeSpane: 42.42,
    id: "exampleId",
    others: "exampleOthers",
    plantingSeason: "examplePlantingSeason",
    rootType: "exampleRootType",
    soilContent: "exampleSoilContent",
    soilDepth: 42.42,
    updatedAt: new Date(),
    waterAmount: 42.42,
  },
];
const FIND_ONE_RESULT = {
  acidity: 42.42,
  createdAt: new Date(),
  estimatedLifeSpane: 42.42,
  id: "exampleId",
  others: "exampleOthers",
  plantingSeason: "examplePlantingSeason",
  rootType: "exampleRootType",
  soilContent: "exampleSoilContent",
  soilDepth: 42.42,
  updatedAt: new Date(),
  waterAmount: 42.42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("TreeCondition", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TreeConditionService,
          useValue: service,
        },
      ],
      controllers: [TreeConditionController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /treeConditions", async () => {
    await request(app.getHttpServer())
      .post("/treeConditions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /treeConditions", async () => {
    await request(app.getHttpServer())
      .get("/treeConditions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /treeConditions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/treeConditions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /treeConditions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/treeConditions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
